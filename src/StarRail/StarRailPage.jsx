import React from 'react'
import ReactDOM from 'react-dom/client'
import { useState, useEffect } from 'react'
import './StarRailPage.css'
import '../Universal/gachaPage.css'
import elementsSR from '../data/elementsSR.json'
import paths from '../data/paths.json'
import PityBox from "../Universal/pityBox/pityBox.jsx";
import {getSheetDataWithImagesStarRail} from '../data/addImagesToData.js'
import SearchBar from '../Universal/SearchBar/searchBar.jsx'
import '../Universal/SearchBar/searchBar.css'
import Filters, {Filtering} from '../Universal/filterButton.jsx' 


function ListSwitchStarRail() {
    const [listShown, setListShown] = useState(true)
    const [starRailCharacters, setStarRailCharacters] = useState({})
    const [starRailWeapons, setStarRailWeapons] = useState({})
    const [loading, setLoading] = useState(true)
    const [searchValue, setSearchValue] = useState('')
    const [filter, setFilter] = useState([])

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

    const characterList = Filtering(starRailCharacters, 'StarRail', searchValue, filter, 'Character')

    const weaponList = Filtering(starRailWeapons, 'StarRail', searchValue, filter, 'Weapon')

    return (
        <>
            <Filters listShown={listShown} filter={filter} setFilter={setFilter} element={elementsSR} elementImgs={'StarRailElementImgs'} elementExt={'webp'} group={paths} groupImgs={'StarRailPathImgs'} groupExt={'webp'}/>
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
                    <PityBox game={'StarRail'}/>
                    {characterList}
                </div>
                :
                <div className={'weaponList'}>
                    <PityBox game={'StarRail'}/>
                    {weaponList}
                </div>
            }
        </>
    )
}

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <div className="container">
            <ListSwitchStarRail />
        </div>
    </React.StrictMode>
)
