export default async function postData(data = {}) {
    await fetch("https://script.google.com/macros/s/AKfycbzeDl7vlXbxTN3UTueV8q3yR8wOgcHEqnOszTJRfecV41fFcqNZk0JKuN7hsFs6dz2JyQ/exec", {
        method: "POST",
        headers: {
            "Content-Type": "text/plain",
        },
        body: JSON.stringify(data)
    });
}