import React from 'react'
import ReactDOM from 'react-dom/client'
import { useState, useEffect } from 'react'
import './GenshinPage.css'
import '../Universal/gachaPage.css'
import elementsGI from '../data/elementsGI.json'
import weapons from '../data/weapons.json'
import CharacterBox from '../Universal/characterBox/characterBox.jsx'
import WeaponBox from '../Universal/weaponBox/weaponBox.jsx'
import {getSheetDataWithImagesGenshin} from '../data/addImagesToData.js'
import SearchBar from '../Universal/SearchBar/searchBar.jsx'
import '../Universal/SearchBar/searchBar.css'
import GetFilterButton from '../Universal/filterButton.jsx' 

function ListSwitchGenshin() {
    const [listShown, setListShown] = useState(true)
    const [genshinCharacters, setGenshinCharacters] = useState({})
    const [genshinWeapons, setGenshinWeapons] = useState({})
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        getSheetDataWithImagesGenshin().then(data => {
            setGenshinCharacters(data.Characters)
            setGenshinWeapons(data.Weapons)
            setLoading(false)
        })
    }, [])

    if (loading) {
        return <div>Loading...</div>
    }

    const characterList = genshinCharacters.map(character => {
        return <CharacterBox key={character.Name} gameCharacter={character} game={'Genshin'} />
    })

    const weaponList = genshinWeapons.map(weapon => {
        return <WeaponBox key={weapon.Name} gameWeapon={weapon} game={'Genshin'} />
    })

    return (
        <>
            <div className={`switch`}>
                <img alt={'character'} src={'https://genshin.honeyhunterworld.com/img/icons/char_35.webp?x50246'}/>
                <button className={``} onClick={() => setListShown(!listShown)}>
                    <div className={`slider ${listShown ? 'sliderLeft' : 'sliderRight'}`}></div>
                </button>
                <img alt={'weapon'} src={'https://genshin.honeyhunterworld.com/img/icons/weapons_35.webp?x50246'}/>
            </div>
            {listShown ?
                <div className={'characterList'}>
                    {characterList}
                </div>
                :
                <div className={'weaponList'}>
                    {weaponList}
                </div>
            }
        </>
    )
}

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <div className="container">
            <SearchBar />
            <div className="filters">
                <ul className="elements">
                    {Object.keys(elementsGI).map((k)=>GetFilterButton(k, elementsGI[k].label, `../assets/GenshinElementImgs/${elementsGI[k].urlKey}.svg`))}
                </ul>
                <ul className="weapons">
                    {Object.keys(weapons).map((k)=>GetFilterButton(k, weapons[k].label, `../assets/GenshinWeaponImgs/${weapons[k].urlKey}.png`))}
                </ul>
            </div>
            <ListSwitchGenshin />
        </div>
    </React.StrictMode>
)