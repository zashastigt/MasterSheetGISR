function AddDuplicatesToJson(data, sheetData, pityPlayers) {
    let newItem = false
    let newData = data.map(key => {
        if (sheetData.Characters[key.name] !== undefined && key.name == sheetData.Characters[key.name].Name) return { ...key, CE: sheetData.Characters[key.name].CE }
        else if (key.name.includes('Trailblazer')) return { ...key, CE: sheetData.Characters[`${key.name} ${key.types.combatType.Element}`].CE }
        else if (sheetData.Weapons[key.name] !== undefined && key.name == sheetData.Weapons[key.name].Name) return { ...key, CE: sheetData.Weapons[key.name].CE }
        else if (key.name.includes('Traveler'))  return { ...key,  CE: sheetData.Characters[`${key.name} ${key.types.combatType.Element}`].CE }

        const newCE = {}
        newItem = true
        Object.values(pityPlayers).map((name) => newCE[name.Name] = "")

        return { ...key, CE: newCE }
    })

    if (newItem) {
        sortingList(newData)
    }
    return newData
}

function sortingList(newData){
    newData.sort((a, b) => {
        if (a.rank !== b.rank) return (a.rank > b.rank) ? -1 : 1;
        if (a.types.combatType !== undefined && a.types.combatType.Element !== b.types.combatType.Element) return (a.types.combatType.Element < b.types.combatType.Element) ? -1 : 1;
        else if (a.types.pathType !== undefined && a.types.pathType.Path !== b.types.pathType.Path) return (a.types.pathType.Path < b.types.pathType.Path) ? -1 : 1;
        return (a.name < b.name) ? -1 : 1;
    })
    return newData
}

export { AddDuplicatesToJson, sortingList }