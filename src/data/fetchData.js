export async function getSheetDataJson() {
    return await fetch("https://script.google.com/macros/s/AKfycbxy7MdF5YrQ9JZyucvCDotNBNZRlPAteCcCpBdwfx5v3SysSjR1ywaGiWX-4zXkoTlOeQ/exec")
    .then(response => { return response.json() });
}