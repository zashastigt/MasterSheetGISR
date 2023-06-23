export default async function postData(data = {}) {
    await fetch("https://script.google.com/macros/s/AKfycbyEAVb46vqxOtPeJLX9uADXoMFM7c4S6M-c4r75YV043J62jxfHseUmQZIp48WXBwz4Pg/exec", {
        method: "POST",
        headers: {
            "Content-Type": "text/plain",
        },
        body: JSON.stringify(data)
    });
}