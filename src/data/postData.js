export default async function postData(data = {}) {
    const key = (`; ${localStorage.getItem('Key')}`).split(`; `).pop().split(';')[0];

    await fetch(`https://script.google.com/macros/s/AKfycbwSN9W5hRlSUTGJU3uD8_3hkScRFzn5RwnuRDLd_Gwibh7_Mdvda4lTreJxdmt030BsCg/exec?cookie=${key}`, {
        method: "POST",
        headers: {
            "Content-Type": "text/plain",
        },
        body: JSON.stringify(data)
    });
}