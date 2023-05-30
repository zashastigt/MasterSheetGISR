async function getSheetData() {
    const response = await fetch("https://sheets.googleapis.com/v4/spreadsheets/{spreadsheetId}");
    const jsonData = await response.json();
    console.log(jsonData);
}