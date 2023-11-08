export const data = [];
export const table1 = document.querySelector("#table1");
export const table2 = document.querySelector("#table2");

export function extractDataFromTable(tableId) {
    const table = document.querySelector(`#${tableId}`);
    const rows = table.querySelectorAll("tbody tr");
    data.length = 0;
    rows.forEach((row, index) => {
        if (index > 0) {
            const cells = row.querySelectorAll("td");
            const values = [];

            cells.forEach((cell, cellIndex) => {
                if (cellIndex > 0) {
                    // Remplace les virgules par des points pour des valeurs décimales valides
                    const value = parseFloat(cell.textContent.replace(',', '.'));
                    values.push(value);
                }
            });

            const country = cells[0].textContent;
            data.push({country, values});
        }
    });
}