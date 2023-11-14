export default async function postData(data = {}) {
    const key = (`; ${localStorage.getItem('Key')}`).split(`; `).pop().split(';')[0];

    await fetch(`https://script.google.com/macros/s/AKfycbxqrYBnLWkDYvXtuL-jMN-odVCInTvDaGm6gPaXRNcElEkMZcNLFx2z8duQTYavMovdjA/exec?cookie=${key}`, {
        method: "POST",
        headers: {
            "Content-Type": "text/plain",
        },
        body: JSON.stringify(data)
    });
}