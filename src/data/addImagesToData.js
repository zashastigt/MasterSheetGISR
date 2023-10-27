import { getGICharacterJson, getGIWeaponJson, getSRCharacterJson, getSRWeaponJson } from './fetchData.js'

const GIElement = import.meta.glob('../assets/GenshinElementImgs/*.svg', { eager: true })
const GIWeapon = import.meta.glob('../assets/GenshinWeaponImgs/*.png', { eager: true })
const SRElement = import.meta.glob('../assets/StarRailElementImgs/*.webp', { eager: true })
const SRPath = import.meta.glob('../assets/StarRailPathImgs/*.webp', { eager: true })

async function getSRDataWithImages() {
  return {
    Character: await getSRCharacterJson().then(function (data) {
      if (data.response !== 200) return
      data.data.items = changeSRCharToImages(Object.values(data.data.items))

      return data.data.items
    }),
    Weapon: await getSRWeaponJson().then(function (data) {
      if (data.response !== 200) return
      data.data.items = changeSRWeaponToImages(Object.values(data.data.items))
      
      return data.data.items
    })
  }
}

async function getGIDataWithImages() {
  return {
    Character: await getGICharacterJson().then(function (data) {
      if (data.response !== 200) return
      data.data.items = changegGICharToImages(Object.values(data.data.items))
      console.log(data.data.items)
      return data.data.items
    }),
    Weapon: await getGIWeaponJson().then(function (data) {
      if (data.response !== 200) return
      data.data.items = changeGIWeaponToImages(Object.values(data.data.items))
      console.log(data.data.items)
      return data.data.items
    })
  }
}

function getGICharImgs(char, data, index) {
  if (char.name.includes('Traveler') && char.route.includes('Boy')) delete data[index]
  return `https://api.ambr.top/assets/UI/${char.icon}.png`

}

function getGIWeaponImgs(weapon, data, index) {
  if (weapon.rank === 1 || weapon.rank === 2) delete data[index]
  return `https://api.ambr.top/assets/UI/${weapon.icon}.png`
}

function getSRCharImgs(char, data, index) {
  if (char.id > 8000 && char.id % 2 != 0) delete data[index]
  return `https://api.yatta.top/hsr/assets/UI/avatar/medium/${char.icon}.png?`
}

function getSRWeaponImgs(weapon) {
  return `https://api.yatta.top/hsr/assets/UI//equipment/medium/${weapon.icon}.png`
}

function changegGICharToImages(data) {
  data.map((character, index) => {
    character['types'] = {}
    switch (character.element) {
      case 'Wind':
        character.types['combatType'] = { 'Img': GIElement['../assets/GenshinElementImgs/anemo.svg'].default, 'Element': 'Anemo' };
        delete data[index].element
        break
      case 'Ice':
        character.types['combatType']  = { 'Img': GIElement['../assets/GenshinElementImgs/cryo.svg'].default, 'Element': 'Cryo' };
        delete data[index].element
        break
      case 'Grass':
        character.types['combatType']  = { 'Img': GIElement['../assets/GenshinElementImgs/dendro.svg'].default, 'Element': 'Dendro' };
        delete data[index].element
        break
      case 'Electric':
        character.types['combatType']  = { 'Img': GIElement['../assets/GenshinElementImgs/electro.svg'].default, 'Element': 'Electro' };
        delete data[index].element
        break
      case 'Rock':
        character.types['combatType']  = { 'Img': GIElement['../assets/GenshinElementImgs/geo.svg'].default, 'Element': 'Geo' };
        delete data[index].element
        break
      case 'Water':
        character.types['combatType']  = { 'Img': GIElement['../assets/GenshinElementImgs/hydro.svg'].default, 'Element': 'Hydro' };
        delete data[index].element
        break
      case 'Fire':
        character.types['combatType']  = { 'Img': GIElement['../assets/GenshinElementImgs/pyro.svg'].default, 'Element': 'Pyro' };
        delete data[index].element
        break
    }

    character.types['pathType'] = changeGIWeaponTypeToImages(character.weaponType)
    delete data[index].weaponType
    character['Img'] = getGICharImgs(character, data, index)
  })

  return data
}

function changeGIWeaponToImages(data) {
  data.forEach((weapon, index) => {
    weapon['types'] = {}
    weapon.types['pathType'] = changeGIWeaponTypeToImages(weapon.type)
    delete data[index].type
    weapon['Img'] = getGIWeaponImgs(weapon, data, index)
  })

  return data
}

function changeGIWeaponTypeToImages(data) {
  switch (data) {
    case 'WEAPON_SWORD_ONE_HAND':
      return { 'Img': GIWeapon['../assets/GenshinWeaponImgs/Sword.png'].default, 'Group': 'Sword' };
    case 'WEAPON_CLAYMORE':
      return { 'Img': GIWeapon['../assets/GenshinWeaponImgs/Claymore.png'].default, 'Group': 'Claymore' };
    case 'WEAPON_POLE':
      return { 'Img': GIWeapon['../assets/GenshinWeaponImgs/Polearm.png'].default, 'Group': 'Polearm' };
    case 'WEAPON_CATALYST':
      return { 'Img': GIWeapon['../assets/GenshinWeaponImgs/Catalyst.png'].default, 'Group': 'Catalyst' };
    case 'WEAPON_BOW':
      return { 'Img': GIWeapon['../assets/GenshinWeaponImgs/Bow.png'].default, 'Group': 'Bow' };
  }
}

function changeSRCharToImages(data) {
  data.map((character, index) => {
    switch (character.types.combatType) {
      case 'Fire':
        character.types.combatType = { 'Img': SRElement['../assets/StarRailElementImgs/Fire.webp'].default, 'Element': character.types.combatType };
        break;
      case 'Ice':
        character.types.combatType = { 'Img': SRElement['../assets/StarRailElementImgs/Ice.webp'].default, 'Element': character.types.combatType };
        break;
      case 'Imaginary':
        character.types.combatType = { 'Img': SRElement['../assets/StarRailElementImgs/Imaginary.webp'].default, 'Element': character.types.combatType };
        break;
      case 'Thunder':
        character.types.combatType = { 'Img': SRElement['../assets/StarRailElementImgs/Lightning.webp'].default, 'Element': 'Lightning' };
        break;
      case 'Physical':
        character.types.combatType = { 'Img': SRElement['../assets/StarRailElementImgs/Physical.webp'].default, 'Element': character.types.combatType };
        break;
      case 'Quantum':
        character.types.combatType = { 'Img': SRElement['../assets/StarRailElementImgs/Quantum.webp'].default, 'Element': character.types.combatType };
        break;
      case 'Wind':
        character.types.combatType = { 'Img': SRElement['../assets/StarRailElementImgs/Wind.webp'].default, 'Element': character.types.combatType };
        break;
    }

    character.types.pathType = changeSRPathToImages(character.types.pathType)
    character['Img'] = getSRCharImgs(character, data, index)
  })

  return data
}

function changeSRWeaponToImages(data) {
  data.forEach((weapon) => {
    weapon.types.pathType = changeSRPathToImages(weapon.types.pathType)
    weapon['Img'] = getSRWeaponImgs(weapon)

  })
  return data
}

function changeSRPathToImages(data) {
  switch (data) {
    case 'Priest':
      return data = { 'Img': SRPath['../assets/StarRailPathImgs/Abundance.webp'].default, 'Group': 'Abundance' };
    case 'Warrior':
      return data = { 'Img': SRPath['../assets/StarRailPathImgs/Destruction.webp'].default, 'Group': 'Destruction' };
    case 'Mage':
      return data = { 'Img': SRPath['../assets/StarRailPathImgs/Erudition.webp'].default, 'Group': 'Erudition' };
    case 'Shaman':
      return data = { 'Img': SRPath['../assets/StarRailPathImgs/Harmony.webp'].default, 'Group': 'Harmony' };
    case 'Warlock':
      return data = { 'Img': SRPath['../assets/StarRailPathImgs/Nihility.webp'].default, 'Group': 'Nihility' };
    case 'Knight':
      return data = { 'Img': SRPath['../assets/StarRailPathImgs/Preservation.webp'].default, 'Group': 'Preservation' };
    case 'Rogue':
      return data = { 'Img': SRPath['../assets/StarRailPathImgs/Hunt.webp'].default, 'Group': 'Hunt' };
  }
}

export { getSRDataWithImages, getGIDataWithImages }