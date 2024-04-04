import React from 'react'
import ReactDOM from 'react-dom/client'
import { useState, useEffect } from 'react'
import './StarRailPage.css'
import '../Universal/gachaPage.css'
import elementsSR from '../data/elementsSR.json'
import paths from '../data/paths.json'
import PityBox from "../Universal/pityBox/pityBox.jsx";
import { getSRDataWithImages } from '../data/addImagesToData.js'
import SearchBar from '../Universal/SearchBar/searchBar.jsx'
import '../Universal/SearchBar/searchBar.css'
import Filters, {Filtering} from '../Universal/filterButton.jsx' 
import ChangePage from '../assets/Icon_Character_Archive.webp'
import { AddDuplicatesToJson } from '../Universal/AddDuplicatesToJson'
import { getSheetDataJson } from '../data/fetchData'
import Header from "../Universal/header/header.jsx";


function ListSwitchStarRail() {
    const [listShown, setListShown] = useState(true)
    const [starRailCharacters, setStarRailCharacters] = useState({})
    const [starRailWeapons, setStarRailWeapons] = useState({})
    const [loading, setLoading] = useState(true)
    const [searchValue, setSearchValue] = useState('')
    const [filter, setFilter] = useState([])
    const [pity, setPity] = useState([])

    useEffect(() => {
        getSRDataWithImages().then(async (data) => {
            return await getSheetDataJson().then((sheet) => {
                setStarRailCharacters(AddDuplicatesToJson(data.Character, sheet.StarRail, sheet.StarRail.SRPity))
                setStarRailWeapons(AddDuplicatesToJson(data.Weapon, sheet.StarRail, sheet.StarRail.SRPity))
                setPity(sheet.StarRail.SRPity)
                setLoading(false)
            })
        })       
    }, [])

    if (loading) {
        return <div>Loading...</div>
    }

    const characterList = Filtering(starRailCharacters, 'StarRail', searchValue, filter, 'Character', setStarRailCharacters)

    const weaponList = Filtering(starRailWeapons, 'StarRail', searchValue, filter, 'Weapon', setStarRailWeapons)

    return (
        <>
            <Filters listShown={listShown} filter={filter} setFilter={setFilter} element={elementsSR} elementImgs={'StarRailElementImgs'} elementExt={'webp'} group={paths} groupImgs={'StarRailPathImgs'} groupExt={'webp'}/>
            <SearchBar searchValue={searchValue} setSearchValue={setSearchValue}/>
            <Header Links={[['../StarRail/', 'Star Rail'], ['../Genshin/', 'Genshin Impact'], ['../Genshin/Teams/', 'Genshin Teams']]}/>
            <div className={`switch`}>
                <img alt={'character'} src={'../assets/charSR.webp'}/>
                <button className={``} onClick={() => setListShown(!listShown)}>
                    <div className={`slider ${listShown ? 'sliderLeft' : 'sliderRight'}`}></div>
                </button>
                <img alt={'weapon'} src={'../assets/weaponSR.webp'}/>
            </div>
            {listShown ?
                <div className={'characterList'}>
                    <PityBox game={'StarRail'} pities={pity} setPities={setPity}/>
                    {characterList}
                </div>
                :
                <div className={'weaponList'}>
                    <PityBox game={'StarRail'} pities={pity} setPities={setPity}/>
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
