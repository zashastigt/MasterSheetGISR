import React from 'react'
import ReactDOM from 'react-dom/client'
import { useState, useEffect } from 'react'
import './StarRailPage.css'
import elementsSR from '../data/elementsSR.json'
import paths from '../data/paths.json'
import CharacterBox from "../Universal/characterBox/characterBox.jsx";
import WeaponBox from "../Universal/weaponBox/weaponBox.jsx";
import {getSheetDataWithImagesStarRail} from "../data/addImagesToData.js";


function ListSwitchStarRail() {
    const [listShown, setListShown] = useState(true)

    return (
        <>
            <div className={'switch'}>
                <button onClick={() => setListShown(!listShown)}>{listShown ? 'Show Light Cones' : 'Show Characters'}</button>
            </div>
            {listShown ?
                <StarRailCharacters />:
                <StarRailWeapons />
            }
        </>
    )
}

function StarRailCharacters() {
    const [starRailData, setStarRailData] = useState({})
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        getSheetDataWithImagesStarRail().then(data => {
            setStarRailData(data)
            setLoading(false)
        })
    }, [])

    console.log(starRailData)

    if (loading) {
        return <div>Loading...</div>
    }

    return (
        <div className={'characterList'}><CharacterBox characterList={starRailData.Characters} /></div>
    )
}

function StarRailWeapons() {
    const [starRailData, setStarRailData] = useState({})
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        getSheetDataWithImagesStarRail().then(data => {
            setStarRailData(data)
            setLoading(false)
        })
    }, [])

    console.log(starRailData)

    if (loading) {
        return <div>Loading...</div>
    }

    return (
        <div className={'weaponList'}><WeaponBox weaponList={starRailData.Weapons} /></div>
    )
}



function SearchBar() {
    const [searchVisibility, setSearchVisibility] = useState(false)
    const [searchValue, setSearchValue] = useState('')

    useEffect(() => {
        document.onkeydown = function (e) {
            if (e.key.length === 1) setSearchVisibility(true);
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
                    {Object.keys(elementsSR).map((k)=>getFilterButton(k, elementsSR[k].label, `../assets/StarRailElementImgs/${elementsSR[k].urlKey}.webp`))}
                </ul>
                <ul className="weapons">
                    {Object.keys(paths).map((k)=>getFilterButton(k, paths[k].label, `../assets/StarRailPathImgs/${paths[k].urlKey}.webp`))}
                </ul>
            </div>
            <ListSwitchStarRail />
        </div>
    </React.StrictMode>
)
