export default async function postData(data = {}) {
    const key = (`; ${localStorage.getItem('Key')}`).split(`; `).pop().split(';')[0];

    await fetch(`https://script.google.com/macros/s/AKfycby5MjjoyBUQ8vBCJrPrT1In-k0eoOLtOZ6GuhWd7ZgidB-E4mHf_sWLAAMopGjmGnt0DA/exec?cookie=${key}`, {
        method: "POST",
        headers: {
            "Content-Type": "text/plain",
        },
        body: JSON.stringify(data)
    });
}