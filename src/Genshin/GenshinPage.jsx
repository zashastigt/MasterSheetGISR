import React from 'react'
import ReactDOM from 'react-dom/client'
import { useState, useEffect } from 'react'
import './GenshinPage.css'
import elementsGI from '../data/elementsGI.json'
import weapons from '../data/weapons.json'
import CharacterBox from "../Universal/characterBox/characterBox.jsx";
import {getSheetDataWithImagesGenshin} from "../data/addImagesToData.js";
import WeaponBox from "../Universal/weaponBox/weaponBox.jsx";

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
        return <WeaponBox key={weapon.Name} gameWeapon={weapons} game={'Genshin'} />
    })

    return (
        <>
            <div className={`switch`}>
                <img alt={'character'} src={'https://hsr.honeyhunterworld.com/img/menu/char.webp?x54196'}/>
                <button className={``} onClick={() => setListShown(!listShown)}>
                    <div className={`slider ${listShown ? 'sliderLeft' : 'sliderRight'}`}></div>
                </button>
                <img alt={'weapon'} src={'https://hsr.honeyhunterworld.com/img/menu/weapon.webp?x5419'}/>
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


function SearchBar() {
    const [searchVisibility, setSearchVisibility] = useState(false)
    const [searchValue, setSearchValue] = useState('')

    useEffect(() => {
        document.onkeydown = function (e) {
            if (e.key.length === 1 && !e.metaKey && !e.ctrlKey && !e.altKey) setSearchVisibility(true);
        };
    });

    useEffect(() => {
        if (searchValue === '') {
            setSearchVisibility(false);
        }
    }, [searchValue]);

    return (
        <>
            {searchVisibility && <input className="search" type="text" autoFocus value={searchValue} onChange={e => setSearchValue(e.target.value)} />}
        </>
    )
}

function getFilterButton(key, label, url){
    return (
        <label key={key} htmlFor={`#${key}`}>
            <input type="checkbox" value={key} id={key} />
            <img className="element" src={url} />
            <span>{label}</span>
        </label>
    )
}

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <div className="container">
            <SearchBar />
            <div className="filters">
                <ul className="elements">
                    {Object.keys(elementsGI).map((k)=>getFilterButton(k, elementsGI[k].label, `../assets/GenshinElementImgs/${elementsGI[k].urlKey}.svg`))}
                </ul>
                <ul className="weapons">
                    {Object.keys(weapons).map((k)=>getFilterButton(k, weapons[k].label, `../assets/GenshinWeaponImgs/${weapons[k].urlKey}.png`))}
                </ul>
            </div>
            <ListSwitchGenshin />
        </div>
    </React.StrictMode>
)