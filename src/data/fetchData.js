export async function getSheetDataJson() {
    return await fetch("https://script.google.com/macros/s/AKfycbzeDl7vlXbxTN3UTueV8q3yR8wOgcHEqnOszTJRfecV41fFcqNZk0JKuN7hsFs6dz2JyQ/exec")
    .then(response => { return response.json() });
}