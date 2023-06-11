export default async function postData(data = {}) {
    const response = await fetch("https://script.google.com/macros/s/AKfycbwS4UPJpDj_JurJaNKaeY22Ffqorg7FGS-MKoYoKGA7YZAvJNiKKz3XXsUVAEDzQslQRg/exec", {
        method: "POST",
        mode: "no-cors",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data)
    });
    console.log(response.json())
    return response.json()
}