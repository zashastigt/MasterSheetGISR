export async function getSheetDataJson() {
    const jsonResponse = await fetch("https://script.google.com/macros/s/AKfycbz3ranY19jnz6fZLh2iMUIjUv8wubXuZ9uAFDgBgtnbUwvBDeKXjVmN8F3yDUokMm5-/exec")
    .then(response => { return response.json() });
    return jsonResponse;
}