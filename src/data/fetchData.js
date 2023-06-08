export async function getSheetDataJson() {
    return await fetch("https://script.google.com/macros/s/AKfycbwS4UPJpDj_JurJaNKaeY22Ffqorg7FGS-MKoYoKGA7YZAvJNiKKz3XXsUVAEDzQslQRg/exec")
    .then(response => { return response.json() });
}