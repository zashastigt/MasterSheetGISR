export async function getSheetDataJson() {
    return await fetch("https://script.google.com/macros/s/AKfycbyEAVb46vqxOtPeJLX9uADXoMFM7c4S6M-c4r75YV043J62jxfHseUmQZIp48WXBwz4Pg/exec")
    .then(response => { return response.json() });
}