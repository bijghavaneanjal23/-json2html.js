// json2html.js

export default function json2html(data) {
  // Start the table with the custom data-user attribute
  let html = '<table data-user="bijghavaneanjal23@gmail.com">';

  // Add the table headers
  html += '<thead><tr>';
  // Dynamically generate headers based on the keys of the first object in the array
  if (data.length > 0) {
    Object.keys(data[0]).forEach(key => {
      html += `<th>${key}</th>`;
    });
  }
  html += '</tr></thead>';

  // Add the table body
  html += '<tbody>';
  data.forEach(item => {
    html += '<tr>';
    Object.keys(item).forEach(key => {
      html += `<td>${item[key]}</td>`;
    });
    html += '</tr>';
  });
  html += '</tbody>';

  // Close the table tag
  html += '</table>';

  // Return the generated HTML table as a string
  return html;
}
