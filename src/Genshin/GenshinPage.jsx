import React from 'react'
import ReactDOM from 'react-dom/client'
import { useState, useEffect } from 'react'
import './GenshinPage.css'
import '../Universal/gachaPage.css'
import elementsGI from '../data/elementsGI.json'
import weapons from '../data/weapons.json'
import charGI from '../assets/charGI.webp'
import weaponGI from '../assets/weaponsGI.webp'
import { getGIDataWithImages } from '../data/addImagesToData.js'
import SearchBar from '../Universal/SearchBar/searchBar.jsx'
import '../Universal/SearchBar/searchBar.css'
import Filters, { Filtering } from '../Universal/filterButton.jsx'
import PityBox from "../Universal/pityBox/pityBox.jsx";
import ChangePage from '../assets/Icon_Character_Archive.webp'
import { AddDuplicatesToJson } from '../Universal/AddDuplicatesToJson'
import { getSheetDataJson } from '../data/fetchData'
import Header from "../Universal/header/header.jsx";

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

    const characterList = Filtering(genshinCharacters, 'Genshin', searchValue, filter, 'Character', setGenshinCharacters)

    const weaponList = Filtering(genshinWeapons, 'Genshin', searchValue, filter, 'Weapon', setGenshinWeapons)

    return (
        <>
            <Filters listShown={listShown} filter={filter} setFilter={setFilter} element={elementsGI} elementImgs={'GenshinElementImgs'} elementExt={'svg'} group={weapons} groupImgs={'GenshinWeaponImgs'} groupExt={'png'} />
            <SearchBar searchValue={searchValue} setSearchValue={setSearchValue} />
            <Header Links={[['../StarRail/', 'Star Rail'], ['../Genshin/', 'Genshin Impact'], ['../Genshin/Teams/', 'Genshin Teams']]}/>
            <div className={`switch`}>
                <img alt={'character'} src={charGI} />
                <button className={``} onClick={() => setListShown(!listShown)}>
                    <div className={`slider ${listShown ? 'sliderLeft' : 'sliderRight'}`}></div>
                </button>
                <img className='moreWhite' alt={'weapon'} src={weaponGI} />
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