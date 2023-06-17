import React from 'react'
import ReactDOM from 'react-dom/client'
import { useState, useEffect } from 'react'
import './GenshinPage.css'
import '../Universal/gachaPage.css'
import elementsGI from '../data/elementsGI.json'
import weapons from '../data/weapons.json'
import {getSheetDataWithImagesGenshin} from '../data/addImagesToData.js'
import SearchBar from '../Universal/SearchBar/searchBar.jsx'
import '../Universal/SearchBar/searchBar.css'
import Filters, {Filtering} from '../Universal/filterButton.jsx' 

function ListSwitchGenshin() {
    const [listShown, setListShown] = useState(true)
    const [genshinCharacters, setGenshinCharacters] = useState({})
    const [genshinWeapons, setGenshinWeapons] = useState({})
    const [loading, setLoading] = useState(true)
    const [searchValue, setSearchValue] = useState('')
    const [filter, setFilter] = useState([])

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

    const characterList = Filtering(genshinCharacters, 'Genshin', searchValue, filter, 'Character')

    const weaponList = Filtering(genshinWeapons, 'Genshin', searchValue, filter, 'Weapon')

    return (
        <>
            <Filters listShown={listShown} filter={filter} setFilter={setFilter} element={elementsGI} elementImgs={'GenshinElementImgs'} elementExt={'svg'} group={weapons} groupImgs={'GenshinWeaponImgs'} groupExt={'png'}/>
            <SearchBar searchValue={searchValue} setSearchValue={setSearchValue}/>
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
            <ListSwitchGenshin />
        </div>
    </React.StrictMode>
)