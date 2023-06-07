// const { google } = require('googleapis')
// export default async function SheetData() {
//     const auth = new google.auth.GoogleAuth({
//         keyFile: '../MasterSheetCred.json',
//         scopes: ['https://www.googleapis.com/auth/spreadsheets'],
//     });
//
//     const client = await auth.getClient();
//     const sheets = google.sheets({ version: 'v4', auth: client });
//
//     const spreadsheetId = '1503531800';
//     const range = 'Sheet1!B2:I29'; // Replace with the desired sheet and range
//
//     const response = await sheets.spreadsheets.values.get({
//         spreadsheetId,
//         range,
//     });
//
//     const values = response.data.values;
//     console.log(values);
// }
