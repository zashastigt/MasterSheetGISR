import React from 'react'
import ReactDOM from 'react-dom/client'
import { useState, useEffect } from 'react'
import './StarRailPage.css'
import '../Universal/gachaPage.css'
import elementsSR from '../data/elementsSR.json'
import paths from '../data/paths.json'
import CharacterBox from '../Universal/characterBox/characterBox.jsx'
import WeaponBox from '../Universal/weaponBox/weaponBox.jsx'
import {getSheetDataWithImagesStarRail} from '../data/addImagesToData.js'
import SearchBar from '../Universal/SearchBar/searchBar.jsx'
import '../Universal/SearchBar/searchBar.css'
import GetFilterButton from '../Universal/filterButton.jsx' 


function ListSwitchStarRail() {
    const [listShown, setListShown] = useState(true)
    const [starRailCharacters, setStarRailCharacters] = useState({})
    const [starRailWeapons, setStarRailWeapons] = useState({})
    const [loading, setLoading] = useState(true)
    const [searchValue, setSearchValue] = useState('')

    useEffect(() => {
        getSheetDataWithImagesStarRail().then(data => {
            setStarRailCharacters(data.Characters)
            setStarRailWeapons(data.Weapons)
            setLoading(false)
        })
    }, [])

    if (loading) {
        return <div>Loading...</div>
    }

    const characterList = starRailCharacters.filter(filter => filter.Name.toLowerCase().includes(searchValue.toLowerCase())).map(character => {
        return <CharacterBox key={character.Name} gameCharacter={character} game={'StarRail'} />
    })

    const weaponList = starRailWeapons.filter(filter => filter.Name.toLowerCase().includes(searchValue.toLowerCase())).map(weapon => {
        return <WeaponBox key={weapon.Name} gameWeapon={weapon} game={'StarRail'} />
    })

    return (
        <>
            <SearchBar searchValue={searchValue} setSearchValue={setSearchValue}/>
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

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <div className="container">
            <div className="filters">
                <ul className="elements">
                    {Object.keys(elementsSR).map((k)=>GetFilterButton(k, elementsSR[k].label, `../assets/StarRailElementImgs/${elementsSR[k].urlKey}.webp`))}
                </ul>
                <ul className="weapons">
                    {Object.keys(paths).map((k)=>GetFilterButton(k, paths[k].label, `../assets/StarRailPathImgs/${paths[k].urlKey}.webp`))}
                </ul>
            </div>
            <ListSwitchStarRail />
        </div>
    </React.StrictMode>
)
