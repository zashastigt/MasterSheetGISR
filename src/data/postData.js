export default async function postData(data = {}) {
    const key = (`; ${localStorage.getItem('Key')}`).split(`; `).pop().split(';')[0];

    await fetch(`https://script.google.com/macros/s/AKfycbwX2ji4gp64K8IXkfJrnWWGavJxDQO4KbMtXqOOf6UlYlaokhAYBKQBtJ9bdn85f45q6g/exec?cookie=${key}`, {
        method: "POST",
        headers: {
            "Content-Type": "text/plain",
        },
        body: JSON.stringify(data)
    });
}