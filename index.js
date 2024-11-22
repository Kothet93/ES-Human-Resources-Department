// Fetch data from the Google Apps Script web app
async function fetchSheetData() {
    const sheetURL =
        'https://script.google.com/macros/s/AKfycbxa0yOaZ4rK85Nf-GYEjeAjzeVA37KGKX0xlYh1g8ycGVwR0tSwPdtxdedy57C8mGj7GA/exec'; // Replace with your actual Apps Script web app URL

    try {
        const response = await fetch(sheetURL);
        const data = await response.json();

        // Generate the table
        const table = document.querySelector('table');
        data.forEach((row, index) => {
            const tr = document.createElement('tr');
            row.forEach((cell) => {
                const td = document.createElement(index === 0 ? 'th' : 'td');
                td.textContent = cell;
                tr.appendChild(td);
            });
            table.appendChild(tr);
        });
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

// Initialize data fetching when the page loads
window.onload = fetchSheetData;
