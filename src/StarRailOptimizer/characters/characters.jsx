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
import NewCharacter from "./newCharacter.jsx";

export default function Characters(props) {
    const hasPageBeenRendered = useRef(false)
    const [loading, setLoading] = useState(true)
    const [searchValue, setSearchValue] = useState('')
    const [filter, setFilter] = useState([])
    const [removeFilters, setRemoveFilters] = useState(false)
    const [listShown, setListShown] = useState(true)
    const [addItem, setAddItem] = useState(false)
    const [addedCharacterList, setAddedCharacters] = useState([])
    const [charDataShown, setCharDataShown] = useState(false)
    const [charData, setCharData] = useState([])

    useEffect(() => {
        const storageList = JSON.parse(localStorage.getItem('CharacterList'))
        if (storageList) setAddedCharacters(sortingList(storageList))
    }, []);

    useEffect(() => {
        !hasPageBeenRendered.current ? hasPageBeenRendered.current = true : localStorage.setItem('CharacterList', JSON.stringify(addedCharacterList))
    }, [addedCharacterList]);

    let characterList = []
    if (addItem && listShown) {
        characterList = Filtering({
            itemList: props.characters,
            searchValue: searchValue,
            filter: filter,
            isChar: true,
            setCurrentList: setAddedCharacters,
            portraitOnly: true,
            setAddItem: setAddItem,
            currentList: addedCharacterList,
            addItem: addItem
        })
    }

    let currentCharacterList = []
    if (Object.keys(addedCharacterList).length > 0 && !addItem && listShown) {
        currentCharacterList = Filtering({
            itemList: addedCharacterList,
            searchValue: searchValue,
            filter: filter,
            isChar: true,
            setCurrentList: setAddedCharacters,
            portraitOnly: true,
            currentList: addedCharacterList,
            onClick: setCharData
        })
    }

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
                    Add Character
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
            {addItem &&
                <NewCharacter characterList={characterList} />
            }
        </>
    )
}