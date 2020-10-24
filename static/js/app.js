// import the data from data.js
const tableData = data;

// Create list for new filters
var Dates = [];
var Cities = [];
var States = [];
var Countries = [];
var Shapes = [];

// Reference the HTML table using d3
var tbody = d3.select("tbody");

function buildTable(data) {
    // Clear data
    tbody.html("");

    // Loop through each object in data
    // Append row and cells for each value in row
  data.forEach((dataRow) => {
        // Append row to the table body
        let row = tbody.append("tr");

        // Loop through each field in data row and add
        // each value as "td"
        Object.values(dataRow).forEach((val) => {
            let cell = row.append("td");
            cell.text(val);
            }
        );
  });
  }

// Create each filter list looping through the initial data (data.js)

function buildLists(data){

  data.forEach((ufo)=> {
          if (!(Dates.includes(ufo["datetime"]))) {
                    Dates.push(ufo["datetime"]);
                  }
          if (!(Cities.includes(ufo["city"]))) {
                    Cities.push(ufo["city"]);
                  }
          if (!(States.includes(ufo["state"]))) {
                    States.push(ufo["state"]);
                  }
          if (!(Countries.includes(ufo["country"]))) {
                    Countries.push(ufo["country"]);
                  }  
          if (!(Shapes.includes(ufo["shape"]))) {
                    Shapes.push(ufo["shape"]);
                  }              
  })
  Cities.sort();
  States.sort();
  Countries.sort();
  Shapes.sort();
}

// Create each dropdown filter
function buildFilter(id, list) {
  let selectedData = d3.select(id);

  selectedData.insert("option").attr("value", "").html(""+ "</option>")

  list.forEach((element) => {
    selectedData.insert("option").attr("value", element).html(element + "</option>") 
}); 
console.log(States);  
}

buildLists(tableData);
buildFilter("#datetime", Dates);
buildFilter("#city", Cities);
buildFilter("#state", States);
buildFilter("#country", Countries);
buildFilter("#shape", Shapes);


// Create function to Updating filters
function updateFilters() {

// Declare filters in function 
var filters = {};

let date = d3.select("#datetime").property("value");
let city = d3.select("#city").property("value");
let state = d3.select("#state").property("value");
let country = d3.select("#country").property("value");
let shape = d3.select("#shape").property("value");

// If filtered value was entered then add value to list or else clear
if (date) {
filters.datetime = date
};
if (city) {
filters.city = city
};
if (state) {
filters.state = state
};
if (country) {
filters.country = country
};
if (shape) {
filters.shape = shape
};

 
filterTable(filters);
}

// Create function to filter table
function filterTable(filters) {

let filteredData = tableData;

// Loop through all of the filters while keeping data

if (filters) {

 
for (let key in filters) {
    console.log(`the key is ${key} and value is ${filters[key]}`);

   switch (key){
       case "datetime": 
            filteredData = filteredData.filter(row => row.datetime === filters.datetime) 
            break;
        case "city":
            filteredData = filteredData.filter(row => row.city === filters.city)
            break;
        case "state":
            filteredData = filteredData.filter(row => row.state === filters.state)
            break;
        case "country":
            filteredData = filteredData.filter(row => row.country === filters.country)
            break;
        case "shape":
            filteredData = filteredData.filter(row => row.shape === filters.shape)
            break;               
    }
} 
};

// Rebuild the table using the new filtered data
buildTable(filteredData);
}

// Attach an event to listen for the form button
d3.selectAll("#filter-btn").on("click", updateFilters);

// Build the table when the page loads
buildTable(tableData);


