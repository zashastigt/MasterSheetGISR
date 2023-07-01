export default async function postData(data = {}) {
    await fetch("https://script.google.com/macros/s/AKfycbzKG0-oeNqKFtwGhVnio1C3ItM8A__vJdbCb9xN7QLVtgQi3MTfhkhJiJE1xDeWAX1s-A/exec", {
        method: "POST",
        headers: {
            "Content-Type": "text/plain",
        },
        body: JSON.stringify(data)
    });
}