import React, { useState, useEffect, useRef } from 'react'
import '../../Universal/gachaPage.css'
import '../../StarRailOptimizer/StarRailOptimizerPage.css'
import '../../Universal/SearchBar/searchBar.css'
import { getSRDataWithImages } from '../../data/addImagesToData.js'
import elementsSR from '../../data/elementsSR.json'
import paths from '../../data/paths.json'
import Filters, { Filtering } from '../../Universal/filterButton.jsx'
import { sortingList } from '../../Universal/AddDuplicatesToJson.js'
import CharacterInfo from "./characterInfo.jsx";

export default function NewCharacter(props) {
    const hasPageBeenRendered = useRef(false)
    const [loading, setLoading] = useState(true)
    const [searchValue, setSearchValue] = useState('')
    const [filter, setFilter] = useState([])
    const [removeFilters, setRemoveFilters] = useState(false)
    const [listShown, setListShown] = useState(true)
    const [addItem, setAddItem] = useState(false)
    const [characters, setCharacters] = useState({})
    const [addedCharacterList, setAddedCharacters] = useState([])
    const [charDataShown, setCharDataShown] = useState(false)
    const [charData, setCharData] = useState([])
    const [relics, setRelics] = useState([])
    const [weapons, setWeapons] = useState({})

    return (
        <>
            <Filters
                listShown={listShown}
                filter={filter}
                setFilter={setFilter}
                element={elementsSR}
                elementImgs={'StarRailElementImgs'}
                elementExt={'webp'}
                group={paths}
                groupImgs={'StarRailPathImgs'}
                groupExt={'webp'}
                hideEverything={removeFilters}
            />
            <div className='container addCharacterContainer'>
                        {
                            [props.characterList]

                        }
            </div>

        </>
    )
}