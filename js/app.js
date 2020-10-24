// import the data from data.js
const tableData = data;

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