# UFOs The Truth is Out There
Create dynamic webpage for UFO sightings where you can filter for various observations for in-depth analysis


# Resources
Data Source: data.js Software: JavaScript, HTML, CSS, VS Code, D3, Bootstrap


# Challenge Results
The original UFO landing page was limited to only date based on the handleClick() function.  The HTML provided a header with nasa image, navigation bar to search by date and article. 

![original_page](https://github.com/shumeiberk/M11_UFOs/blob/master/static/images/original_page.PNG)

- The challenge objective was to create five total filters in the table, a new function to build lists for the five filters by Date, City, State, Country and Shape was created.
An if-else statement was added to filter data from the input or clear the data if no input data existed (the updateFilters().  The function would loop around the data for this information as it filtered across the tables.  Once that was complete the table would be rebuild by calling the buildTable function.  The end call statement to attach an event listener to pick up changes was used.
- The buttons for the new five filters with drop down was added to the HTML page for easy search and filter

![Updated](https://github.com/shumeiberk/M11_UFOs/blob/master/static/images/updated.PNG)
