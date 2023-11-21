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

export default function Characters(props) {
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

    let currentCharacterList = []
    if (Object.keys(addedCharacterList).length > 0 && !addItem && listShown) {
        currentCharacterList = Filtering({ itemList: addedCharacterList, searchValue: searchValue, filter: filter, isChar: true, setCurrentList: setAddedCharacters, portraitOnly: true, currentList: addedCharacterList, onClick: setCharData })
    }
    console.log(currentCharacterList)
    console.log(props.addedCharacterList)
    console.log(props)

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

            <div className='container'>
                <button
                    className={`button newItem text ${charDataShown ? 'hideInteractions' : ''}`}
                    onClick={() => setAddItem(!addItem)}>
                    {listShown ? (addItem ? 'Cancel' : 'Add Character') : (addItem ? 'Cancel' : 'Add Relic')}
                </button>
            </div>

            {charDataShown ?
                <>
                    <CharacterInfo charData={charData} />
                </>
                :
                <div className='container addCharacterContainer'>

                    {[currentCharacterList]}

                </div>
            }
        </>
    )
}