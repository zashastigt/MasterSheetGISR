import React from 'react'
import ReactDOM from 'react-dom/client'
import { useState, useEffect } from 'react'
import './GenshinPage.css'
import '../Universal/gachaPage.css'
import elementsGI from '../data/elementsGI.json'
import weapons from '../data/weapons.json'
import { getGIDataWithImages } from '../data/addImagesToData.js'
import SearchBar from '../Universal/SearchBar/searchBar.jsx'
import '../Universal/SearchBar/searchBar.css'
import Filters, { Filtering } from '../Universal/filterButton.jsx'
import PityBox from "../Universal/pityBox/pityBox.jsx";
import ChangePage from '../assets/Icon_Character_Archive.webp'
import { AddDuplicatesToJson } from '../Universal/AddDuplicatesToJson'
import { getSheetDataJson } from '../data/fetchData'

function ListSwitchGenshin() {
    const [listShown, setListShown] = useState(true)
    const [genshinCharacters, setGenshinCharacters] = useState({})
    const [genshinWeapons, setGenshinWeapons] = useState({})
    const [loading, setLoading] = useState(true)
    const [searchValue, setSearchValue] = useState('')
    const [filter, setFilter] = useState([])
    const [pity, setPity] = useState([])

    useEffect(() => {
        getGIDataWithImages().then(async (data) => {
            return await getSheetDataJson().then((sheet) => {
                setGenshinCharacters(AddDuplicatesToJson(data.Character, sheet.Genshin, sheet.Genshin.GIPity))
                setGenshinWeapons(AddDuplicatesToJson(data.Weapon, sheet.Genshin, sheet.Genshin.GIPity))
                setPity(sheet.Genshin.GIPity)
                setLoading(false)
            })
        })
    }, [])

    if (loading) {
        return <div>Loading...</div>
    }

    const characterList = Filtering({itemList: genshinCharacters, game: 'Genshin', searchValue: searchValue, filter: filter, isChar: true, setCurrentList: setGenshinCharacters})

    const weaponList = Filtering({itemList: genshinWeapons, game: 'Genshin', searchValue: searchValue, filter: filter, setCurrentList: setGenshinWeapons})

    return (
        <>
            <Filters listShown={listShown} filter={filter} setFilter={setFilter} element={elementsGI} elementImgs={'GenshinElementImgs'} elementExt={'svg'} group={weapons} groupImgs={'GenshinWeaponImgs'} groupExt={'png'} />
            <SearchBar searchValue={searchValue} setSearchValue={setSearchValue} />
            <div className={`switch`}>
                <img alt={'character'} src={'https://genshin.honeyhunterworld.com/img/icons/char_35.webp?x50246'} />
                <button className={``} onClick={() => setListShown(!listShown)}>
                    <div className={`slider ${listShown ? 'sliderLeft' : 'sliderRight'}`}></div>
                </button>
                <img className='moreWhite' alt={'weapon'} src={'https://genshin.honeyhunterworld.com/img/icons/weapons_35.webp?x50246'} />
                <a href={'../StarRail/'}>
                    <img className={'switchGameImage'} src={ChangePage} />
                </a>
            </div>
            {listShown ?
                <div className={'characterList'}>
                    <PityBox game={'Genshin'} pities={pity} setPities={setPity} />
                    {characterList}
                </div>
                :
                <div className={'weaponList'}>
                    <PityBox game={'Genshin'} pities={pity} setPities={setPity} />
                    {weaponList}
                </div>
            }
        </>
    )
}

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <div className="container">
            <ListSwitchGenshin />
        </div>
    </React.StrictMode>
)