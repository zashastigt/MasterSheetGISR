import React, { useState, useEffect, useRef } from 'react'
import ReactDOM from 'react-dom/client'
import '../Universal/gachaPage.css'
import '../StarRailOptimizer/StarRailOptimizerPage.css'
import '../Universal/SearchBar/searchBar.css'
import { getSRDataWithImages } from '../data/addImagesToData.js'
import elementsSR from '../data/elementsSR.json'
import paths from '../data/paths.json'
import Filters, { Filtering } from '../Universal/filterButton.jsx'
import SearchBar from '../Universal/SearchBar/searchBar.jsx'
import { sortingList } from '../Universal/AddDuplicatesToJson.js'
import Characters from "./characters/characters.jsx";

function MainSROptimizerPage() {
    const hasPageBeenRendered = useRef(false)
    const [loading, setLoading] = useState(true)
    const [searchValue, setSearchValue] = useState('')
    const [filter, setFilter] = useState([])
    const [removeFilters, setRemoveFilters] = useState(false)
    const [listShown, setListShown] = useState('characters')
    const [addItem, setAddItem] = useState(false)
    const [characters, setCharacters] = useState({})
    const [addedCharacterList, setAddedCharacters] = useState([])
    const [charDataShown, setCharDataShown] = useState(false)
    const [charData, setCharData] = useState([])
    const [relics, setRelics] = useState([])
    const [weapons, setWeapons] = useState({})

    useEffect(() => {
        getSRDataWithImages().then((data) => {
            setCharacters(sortingList(data.Character))
            setWeapons(data.Weapon)
            setLoading(false)
        })
    }, [])


    useEffect(() => {
        if (!hasPageBeenRendered.current) hasPageBeenRendered.current = true
        else {
            if (Object.keys(charData).length > 0) {
                setRemoveFilters(true)
                setCharDataShown(true)
            }
        }
    }, [charData]);

    if (loading) {
        return <div>Loading...</div>
    }

    function SelectedList() {
        switch (listShown) {
            case 'characters':
                return (
                    <Characters
                        characters={characters}
                    />
                )
            case 'relics':
                return (
                    <Relics />
                )
            case 'weapons':
                return (
                    <Weapons />
                )
        }
    }

    return (
        <>
            <SearchBar searchValue={searchValue} setSearchValue={setSearchValue} />
            <div className="button_header_banner" >
                <button className='button_header button text' onClick={() => { setListShown('characters')}}>Characters</button>
                <button className='button_header button text' onClick={() => { setListShown('relics')}}>Relics</button>
            </div>
            <SelectedList />
        </>
    )
}

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <div className='container' id='container_optimizer'>
            <MainSROptimizerPage />
        </div>
    </React.StrictMode>
)