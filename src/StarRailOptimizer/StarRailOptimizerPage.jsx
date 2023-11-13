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

function MainSROptimizerPage() {
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

    useEffect(() => {
        getSRDataWithImages().then((data) => {
            setCharacters(sortingList(data.Character))
            setWeapons(data.Weapon)
            setLoading(false)
        })
    }, [])

    useEffect(() => {
        const storageList = JSON.parse(localStorage.getItem('CharacterList'))
        if (storageList) setAddedCharacters(sortingList(storageList))

    }, []);

    useEffect(() => {
        !hasPageBeenRendered.current ? hasPageBeenRendered.current = true : localStorage.setItem('CharacterList', JSON.stringify(addedCharacterList))
    }, [addedCharacterList]);

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

    let characterList = []
    if (addItem && listShown) {
        characterList = Filtering({ itemList: characters, searchValue: searchValue, filter: filter, isChar: true, setCurrentList: setAddedCharacters, portraitOnly: true, setAddItem: setAddItem, currentList: addedCharacterList, addItem: addItem })
    }

    let currentCharacterList = []
    if (Object.keys(addedCharacterList).length > 0 && !addItem && listShown) {
        currentCharacterList = Filtering({ itemList: addedCharacterList, searchValue: searchValue, filter: filter, isChar: true, setCurrentList: setAddedCharacters, portraitOnly: true, currentList: addedCharacterList, onClick: setCharData })
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
                hideEverything={removeFilters} />
            <SearchBar searchValue={searchValue} setSearchValue={setSearchValue} />

            <div className="button_header_banner" >
                <button className='button_header button text' onClick={() => { setListShown(true); setAddItem(false); setRemoveFilters(false) }}>Characters</button>
                <button className='button_header button text' onClick={() => { setListShown(false); setAddItem(false); setRemoveFilters(true) }}>Relics</button>
            </div>
            <div className='container'>
                <button
                    className={`button newItem text ${charDataShown ? 'hideInteractions' : ''}`}
                    onClick={() => setAddItem(!addItem)}>
                    {listShown ? (addItem ? 'Cancel' : 'Add Character') : (addItem ? 'Cancel' : 'Add Relic')}
                </button>
            </div>
            {charDataShown ?
                <div className='container charDetailsBackground'>
                    <div>
                        <img alt={'img'} src={charData.Img} />
                        <input type="range" min="1" max="80" />
                    </div>
                    <ul className='charStatBackground'>
                        <li>
                            <p>HP</p>
                        </li>
                        <li>
                            <p>ATK</p>
                        </li>
                        <li>
                            <p>DEF</p>
                        </li>
                        <li>
                            <p>SPD</p>
                        </li>
                    </ul>
                    <div>
                        <input type="range" min="1" max="9"/>
                        <ul>

                        </ul>
                    </div>
                    <div>
                        <input type="range" min="1" max="15"/>
                        <ul>

                        </ul>
                    </div>
                    <div>
                        <input type="range" min="1" max="15"/>
                        <ul>

                        </ul>
                    </div>
                    <div>
                        <input type="range" min="1" max="15"/>
                        <ul>

                        </ul>
                    </div>
                    <div>
                        exitbox
                    </div>
                    <div>
                        artifacts
                        <div>
                            head
                        </div>
                        <div>
                            hands
                        </div>
                        <div>
                            body
                        </div>
                        <div>
                            boots
                        </div>
                        <div>
                            sphere
                        </div>
                        <div>
                            rope
                        </div>
                    </div>
                </div>
                :
                listShown ?
                    <div className='container addCharacterContainer'>
                        {addItem ?
                            [characterList]
                            :
                            [currentCharacterList]
                        }
                    </div>
                    :
                    <div>
                        {relics}
                    </div>
            }
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