export async function getSheetDataJson() {
    return await fetch("https://script.google.com/macros/s/AKfycbxljRoACHe_iRNR1W7WsLZ90WLtV6SzqyFutvkmZ5di6YktMINcvPIes9_kpnQhCF2z0w/exec")
    .then(response => { return response.json() });
}