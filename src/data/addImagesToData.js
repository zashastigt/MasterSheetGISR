import {getSheetDataJson} from './fetchData.js'
import giAnemo from '../assets/anemo.svg'
import giCryo from '../assets/cryo.svg'
import giDendro from '../assets/dendro.svg'
import giElectro from '../assets/electro.svg'
import giGeo from '../assets/geo.svg'
import giHydro from '../assets/hydro.svg'
import giPyro from '../assets/pyro.svg'
import srFire from '../assets/Fire.webp'
import srIce from '../assets/Ice.webp'
import srImaginary from '../assets/Imaginary.webp'
import srLightning from '../assets/Lightning.webp'
import srPhysical from '../assets/Physical.webp'
import srQuantum from '../assets/Quantum.webp'
import srWind from '../assets/Wind.webp'
import srAbundance from '../assets/Abundance.webp'
import srDestruction from '../assets/Destruction.webp'
import srErudition from '../assets/Erudition.webp'
import srHarmony from '../assets/Harmony.webp'
import srNihility from '../assets/Nihility.webp'
import srPersevation from '../assets/Persevation.webp'
import srTheHunt from '../assets/TheHunt.webp'

export function getSheetDataWithImages() {
    getSheetDataJson().then(function(data) {
        data.Genshin.Characters = addImagesToGenshinCharacterData(data.Genshin.Characters)
        data.StarRail.Characters = addImagesToStarRailCharacterData(data.StarRail.Characters)
        console.log(data) 
    });
  }
  
  function addImagesToGenshinCharacterData(data) {
    data.map((character) => {
      switch (character.Element) {
        case 'Anemo':
          character.Element = giAnemo;
          break;
        case 'Cryo':
          character.Element = giCryo;
          break;
        case 'Dendro':
          character.Element = giDendro;
          break;
        case 'Electro':
          character.Element = giElectro;
          break;
        case 'Geo':
          character.Element = giGeo;
          break;
        case 'Hydro':
          character.Element = giHydro;
          break;
        case 'Pyro':
          character.Element = giPyro;
          break;
      }
    })
    return data;
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

      switch (character.Path) {
        case 'Anemo':
          character.Path = srAbundance;
          break;
        case 'Cryo':
          character.Path = srDestruction;
          break;
        case 'Dendro':
          character.Path = srErudition;
          break;
        case 'Electro':
          character.Path = srHarmony;
          break;
        case 'Geo':
          character.Path = srNihility;
          break;
        case 'Hydro':
          character.Path = srPersevation;
          break;
        case 'Pyro':
          character.Path = srTheHunt;
          break;
      }
    })
    return data;
  }
  