export default async function postData(data = {}) {
    await fetch("https://script.google.com/macros/s/AKfycbxljRoACHe_iRNR1W7WsLZ90WLtV6SzqyFutvkmZ5di6YktMINcvPIes9_kpnQhCF2z0w/exec", {
        method: "POST",
        headers: {
            "Content-Type": "text/plain",
        },
        body: JSON.stringify(data)
    });
}