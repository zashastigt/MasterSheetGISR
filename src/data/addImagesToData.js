import {getSheetDataJson} from './fetchData.js'
import giAnemo from '../assets/GenshinElementImgs/anemo.svg'
import giCryo from '../assets/GenshinElementImgs/cryo.svg'
import giDendro from '../assets/GenshinElementImgs/dendro.svg'
import giElectro from '../assets/GenshinElementImgs/electro.svg'
import giGeo from '../assets/GenshinElementImgs/geo.svg'
import giHydro from '../assets/GenshinElementImgs/hydro.svg'
import giPyro from '../assets/GenshinElementImgs/pyro.svg'
import giSword from '../assets/GenshinWeaponImgs/Sword.png'
import giClaymore from '../assets/GenshinWeaponImgs/Claymore.png'
import giPole from '../assets/GenshinWeaponImgs/Pole.png'
import giBow from '../assets/GenshinWeaponImgs/Bow.png'
import giCatalyst from '../assets/GenshinWeaponImgs/Catalyst.png'
import srFire from '../assets/StarRailElementImgs/Fire.webp'
import srIce from '../assets/StarRailElementImgs/Ice.webp'
import srImaginary from '../assets/StarRailElementImgs/Imaginary.webp'
import srLightning from '../assets/StarRailElementImgs/Lightning.webp'
import srPhysical from '../assets/StarRailElementImgs/Physical.webp'
import srQuantum from '../assets/StarRailElementImgs/Quantum.webp'
import srWind from '../assets/StarRailElementImgs/Wind.webp'
import srAbundance from '../assets/StarRailPathImgs/Abundance.webp'
import srDestruction from '../assets/StarRailPathImgs/Destruction.webp'
import srErudition from '../assets/StarRailPathImgs/Erudition.webp'
import srHarmony from '../assets/StarRailPathImgs/Harmony.webp'
import srNihility from '../assets/StarRailElementImgs/Nihility.webp'
import srPreservation from '../assets/StarRailPathImgs/Preservation.webp'
import srHunt from '../assets/StarRailPathImgs/Hunt.webp'
import {useState} from "react";

function getSheetDataWithImagesStarRail() {
  return getSheetDataJson().then(function(data) {
    data.StarRail.Characters = addImagesToStarRailCharacterData(data.StarRail.Characters)
    data.StarRail.Characters = getStarRailCharacterImgs(data.StarRail.Characters)
    data.StarRail.Weapons = addImagesToStarRailWeaponData(data.StarRail.Weapons)
    data.StarRail.Weapons = getStarRailWeaponImgs(data.StarRail.Weapons)
    console.log(data.StarRail)
    return data.StarRail
  });
}

function getSheetDataWithImagesGenshin() {
  return getSheetDataJson().then(function(data) {
    data.Genshin.Characters = addImagesToGenshinCharacterData(data.Genshin.Characters)
    data.Genshin.Characters = getGenshinCharacterImgs(data.Genshin.Characters)
    data.Genshin.Weapons = addImagesToGenshinWeaponData(data.Genshin.Weapons)
    data.Genshin.Weapons = getGenshinWeaponImgs(data.Genshin.Weapons)
    console.log(data.Genshin)
    return data.Genshin
  });
}

function getGenshinCharacterImgs(data) {
  return data.map(character => {
    let name = character.Name.toLowerCase().replaceAll(' ', '_')
    if (name.includes('traveler')) {
      name = 'traveler_electro'
    }
    return {...character, Img: 'https://paimon.moe/images/characters/' + name + '.png'}
  })
}

function getGenshinWeaponImgs(data) {
  return data.map(weapon => {
    let name = weapon.Name.toLowerCase()
        .replaceAll(' ', '_')
        .replaceAll("'", '')
    return {...weapon, Img: "https://paimon.moe/images/weapons/" + name + ".png"}
  })
}

function getStarRailCharacterImgs(data) {
  return data.map(character => {
    let name = character.Name.toLowerCase().replaceAll(' ', '-')
    let which = ''
    if (name.includes('trailblazer')) {
      name = 'trailblazer'
      switch (character.Element.split('/')[3]) {
        case 'Physical.webp':
          which = '-2'
          break
        case 'Fire.webp':
          which = '-4'
          break
        case 'Ice.webp':
          which = '-4'
          break
        case 'Lightning.webp':
          which = '-4'
          break
        case 'Quantum.webp':
          which = '-4'
          break
        case 'Imaginary.webp':
          which = '-4'
          break
        case 'Wind.webp':
          which = '-4'
          break
      }
    }
    return {...character, Img: 'https://hsr.honeyhunterworld.com/img/character/' + name + '-character' + which + '_action_side_icon.webp'}
  })
}

function getStarRailWeaponImgs(data) {
  return data.map(weapon => {
    let name = weapon.Name.toLowerCase()
        .replaceAll(' ', '-')
        .replaceAll('!', '')
        .replaceAll("'", '')
        .replaceAll(',', '')
    return {...weapon, Img: 'https://hsr.honeyhunterworld.com/img/item/' + name + '-item_icon.webp'}
  })
}
  
function addImagesToGenshinCharacterData(data) {
  data.map((character) => {
    switch (character.Element) {
      case 'Anemo':
        character.Element = giAnemo
        break
      case 'Cryo':
        character.Element = giCryo
        break
      case 'Dendro':
        character.Element = giDendro
        break
      case 'Electro':
        character.Element = giElectro
        break
      case 'Geo':
        character.Element = giGeo
        break
      case 'Hydro':
        character.Element = giHydro
        break
      case 'Pyro':
        character.Element = giPyro
        break
    }

    switch (character.Group) {
      case 'Sword':
        character.Group = giSword
        break
      case 'Claymore':
        character.Group = giClaymore
        break
      case 'Polearm':
        character.Group = giPole
        break
      case 'Catalyst':
        character.Group = giCatalyst
        break
      case 'Bow':
        character.Group = giBow
        break
    }
  })
  return data
}

function addImagesToGenshinWeaponData(data) {
  data.map((weapon) => {
    switch (weapon.Group) {
      case 'Sword':
        weapon.Group = giSword
        break
      case 'Claymore':
        weapon.Group = giClaymore
        break
      case 'Polearm':
        weapon.Group = giPole
        break
      case 'Catalyst':
        weapon.Group = giCatalyst
        break
      case 'Bow':
        weapon.Group = giBow
        break
    }
  })
  return data
}
  
function addImagesToStarRailCharacterData(data) {
  data.map((character) => {
    switch (character.Element) {
      case 'Fire':
        character.Element = srFire;
        break;
      case 'Ice':
        character.Element = srIce;
        break;
      case 'Imaginary':
        character.Element = srImaginary;
        break;
      case 'Lightning':
        character.Element = srLightning;
        break;
      case 'Physical':
        character.Element = srPhysical;
        break;
      case 'Quantum':
        character.Element = srQuantum;
        break;
      case 'Wind':
        character.Element = srWind;
        break;
    }

    switch (character.Group) {
      case 'Abundance':
        character.Group = srAbundance;
        break;
      case 'Destruction':
        character.Group = srDestruction;
        break;
      case 'Erudition':
        character.Group = srErudition;
        break;
      case 'Harmony':
        character.Group = srHarmony;
        break;
      case 'Nihility':
        character.Group = srNihility;
        break;
      case 'Preservation':
        character.Group = srPreservation;
        break;
      case 'Hunt':
        character.Group = srHunt;
        break;
    }
  })
  return data;
}

function addImagesToStarRailWeaponData(data) {
  data.map((weapon) => {
    switch (weapon.Group) {
      case 'Abundance':
        weapon.Group = srAbundance;
        break;
      case 'Destruction':
        weapon.Group = srDestruction;
        break;
      case 'Erudition':
        weapon.Group = srErudition;
        break;
      case 'Harmony':
        weapon.Group = srHarmony;
        break;
      case 'Nihility':
        weapon.Group = srNihility;
        break;
      case 'Preservation':
        weapon.Group = srPreservation;
        break;
      case 'Hunt':
        weapon.Group = srHunt;
        break;
    }
  })
  return data;
}

export {getSheetDataWithImagesStarRail, getSheetDataWithImagesGenshin}