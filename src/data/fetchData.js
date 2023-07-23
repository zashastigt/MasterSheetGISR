export async function getSheetDataJson() {
    const key = (`; ${localStorage.getItem('Key')}`).split(`; `).pop().split(';')[0];

    return await fetch(`https://script.google.com/macros/s/AKfycby5MjjoyBUQ8vBCJrPrT1In-k0eoOLtOZ6GuhWd7ZgidB-E4mHf_sWLAAMopGjmGnt0DA/exec?cookie=${key}`)
    .then(response => { return response.json() });
}