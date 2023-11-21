export async function getSheetDataJson() {
    const key = (`; ${localStorage.getItem('Key')}`).split(`; `).pop().split(';')[0];

    return await fetch(`https://script.google.com/macros/s/AKfycbxqrYBnLWkDYvXtuL-jMN-odVCInTvDaGm6gPaXRNcElEkMZcNLFx2z8duQTYavMovdjA/exec?cookie=${key}`)
    .then(response => { return response.json() });
}

export async function getSRCharacterJson() {
    return await fetch(`https://api.yatta.top/hsr/v2/en/avatar`)
    .then(response => { return response.json() });
}

export async function getSRWeaponJson() {
    return await fetch(`https://api.yatta.top/hsr/v2/en/equipment`)
    .then(response => { return response.json() });
}

export async function getGICharacterJson() {
    return await fetch(`https://api.ambr.top/v2/en/avatar`)
    .then(response => { return response.json() });
}

export async function getGICharacterStatJson() {
    return await fetch(`https://api.ambr.top/v2/en/avatar`)
        .then(response => { return response.json() }).then(data => {
            Promise.all(
            Object.keys(data.data.items).map( id =>
                fetch(`https://api.ambr.top/v2/en/avatar/${id}`).then(response => {
                    return response.json()})
            ))
        }).then(response => { return response.json() });
}

export async function getGIWeaponJson() {
    return await fetch(`https://api.ambr.top/v2/en/weapon`)
    .then(response => { return response.json() });
}