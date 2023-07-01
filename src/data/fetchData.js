export async function getSheetDataJson() {
    return await fetch("https://script.google.com/macros/s/AKfycbzKG0-oeNqKFtwGhVnio1C3ItM8A__vJdbCb9xN7QLVtgQi3MTfhkhJiJE1xDeWAX1s-A/exec")
    .then(response => { return response.json() });
}