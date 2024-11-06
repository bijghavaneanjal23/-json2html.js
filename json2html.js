// json2html.js

export default function json2html(data) {
  // Start the table with the custom data-user attribute
  let html = '<table data-user="bijghavaneanjal23@gmail.com">';

  // Define the header explicitly (Name, Age, Gender)
  html += '<thead><tr>';
  html += '<th>Name</th>';
  html += '<th>Age</th>';
  html += '<th>Gender</th>';
  html += '</tr></thead>';

  // Add the table body
  html += '<tbody>';
  data.forEach(item => {
    html += '<tr>';
    
    // Ensure that each row contains the expected 3 columns (Name, Age, Gender)
    html += `<td>${item.Name || ''}</td>`; // Default to empty string if Name is missing
    html += `<td>${item.Age || ''}</td>`;  // Default to empty string if Age is missing
    html += `<td>${item.Gender || ''}</td>`; // Default to empty string if Gender is missing
    
    html += '</tr>';
  });
  html += '</tbody>';

  // Close the table tag
  html += '</table>';

  // Return the generated HTML table as a string
  return html;
}
