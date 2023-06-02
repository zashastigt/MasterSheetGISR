async function getSheetData() {
    const response = await fetch("https://sheets.googleapis.com/v4/spreadsheets/17LbbqsemrAKyXvfnGdZM2Aox32umyBAFhWvUwzK_Cw4");
    const jsonData = await response.json();
    console.log(jsonData);
}

getSheetData()