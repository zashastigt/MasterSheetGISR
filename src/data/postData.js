export default async function postData(data = {}) {
    const key = (`; ${localStorage.getItem('Key')}`).split(`; `).pop().split(';')[0];

    await fetch(`https://script.google.com/macros/s/AKfycbxZvnKbw5ZhDFdq1ADWpv9vLXB93WC7UNGKAh9rVvV0TsOj4bobf-FVrtmf1fv-SaAskA/exec?cookie=${key}`, {
        method: "POST",
        headers: {
            "Content-Type": "text/plain",
        },
        body: JSON.stringify(data)
    });
}