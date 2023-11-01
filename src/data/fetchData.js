export async function getSheetDataJson() {
    const key = (`; ${localStorage.getItem('Key')}`).split(`; `).pop().split(';')[0];

    return await fetch(`https://script.google.com/macros/s/AKfycbx7PzbIMqJkAfpvu8TOvKyuovZ-62b42kKX4E3G2uibszHUQPyjSbHP_5rkJYL9_avcjQ/exec?cookie=${key}`)
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

export async function getGIWeaponJson() {
    return await fetch(`https://api.ambr.top/v2/en/weapon`)
    .then(response => { return response.json() });
}