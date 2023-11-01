export default async function postData(data = {}) {
    const key = (`; ${localStorage.getItem('Key')}`).split(`; `).pop().split(';')[0];

    await fetch(`https://script.google.com/macros/s/AKfycbx7PzbIMqJkAfpvu8TOvKyuovZ-62b42kKX4E3G2uibszHUQPyjSbHP_5rkJYL9_avcjQ/exec?cookie=${key}`, {
        method: "POST",
        headers: {
            "Content-Type": "text/plain",
        },
        body: JSON.stringify(data)
    });
}