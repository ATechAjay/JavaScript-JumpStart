function generateTable() {
  // 1. Create a <table> and <tbody> element using JS.

  const table = document.createElement("table");
  const tableBody = document.createElement("tbody");

  //   2. Create three rows elements, that are <tr>.

  for (let i = 1; i <= 3; i++) {
    const row = document.createElement("tr");

    for (let j = 1; j <= 3; j++) {
      //   3. Create three <td>, text node elements.
      const cell = document.createElement("td");
      const cellText = document.createTextNode(`(${i}, ${j})`);

      cell.appendChild(cellText);
      row.appendChild(cell);
    }

    tableBody.appendChild(row);
  }

  table.appendChild(tableBody);
  document.body.appendChild(table);
  table.setAttribute("border", "2");
}
