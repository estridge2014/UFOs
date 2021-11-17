// from data.js
const tableData = data;

// get table references
var tbody = d3.select("tbody");

function buildTable(data) {




  // 
  // First, clear out any existing data
  tbody.html("");

  // Next, loop through each object in the data
  // and append a row and cells for each value in the row
  data.forEach((dataRow) => {
    // Append a row to the table body
    let row = tbody.append("tr");

    // Loop through each field in the dataRow and add
    // each value as a table cell (td)
    Object.values(dataRow).forEach((val) => {
      let cell = row.append("td");
      cell.text(val);
    });
  });
}
// 1. Create a variable to keep track of all the filters as an object.
var filtering = {}

// 3. Use this function to update the filters. 
function updated_Filtering() {

    // 4a. Save the element that was changed as a variable.
    
    // 4b. Save the value that was changed as a variable.
    
    // 4c. Save the id of the filter that was changed as a variable.

    let newFilter = d3.select(this);
  
    let newValue = newFilter.property("value");
    console.log(newValue);
    
    let newFilterId = newFilter.attr("id");
    console.log(newFilterId)
  
    // 5. If a filter value was entered then add that filterId and value
    // to the filters list. Otherwise, clear that filter from the filters object.
    if (newValue) {
      filtering[newFilterId] = newValue;
    }
    else {
      delete filtering[newFilterId];
    }
  
    // 6. Call function to apply all filters and rebuild the table
   filterTable();
  
  }
  
  // 7. Use this function to filter the table when data is entered.
  function filterTable() {

      // 8. Set the filtered data to the tableData.
      filteredData = data 
  
      // 9. Loop through all of the filters and keep any data that
      // matches the filter values
  
      if (filtering.datetime) {
          filteredData = filteredData.filter(row => row.datetime === filtering.datetime);
      };
      if (filtering.city) {
          filteredData = filteredData.filter(row => row.city === filtering.city);
      };
      if (filtering.state) {
          filteredData = filteredData.filter(row => row.state === filtering.state);
      };
      if (filtering.country) {
          filteredData = filteredData.filter(row => row.country === filtering.country);
      };
      if (filtering.shape) {
        filteredData = filteredData.filter(row => row.shape === filtering.shape);
      };
    
      // 10. Finally, rebuild the table using the filtered data
      buildTable(filteredData)
    }
    
    // 2. Attach an event to listen for changes to each filter
    d3.selectAll("input").on("change", updated_Filtering);
    
    // Build the table when the page loads
    buildTable(tableData);