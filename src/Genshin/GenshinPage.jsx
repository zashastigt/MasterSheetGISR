import React from 'react'
import ReactDOM from 'react-dom/client'
import { useState, useRef, useEffect } from 'react'
import './GenshinPage.css'
import elements from '../data/elements.json'
import weapons from '../data/weapons.json'

function SearchBar() {

    const [searchVisibility, setSearchVisibility] = useState(false)
    const [searchValue, setSearchValue] = useState('')

    const searchRef = useRef();

    useEffect(() => {
        document.onkeydown = function (e) {
            setSearchVisibility(true);
        };
    });

    useEffect(() => {
        if (searchValue === '') {
            setSearchVisibility(false);
        }
    }, [searchValue]);

    return (
        <>
            {searchVisibility && <input className="search" type="text" autoFocus ref={searchRef} value={searchValue} onChange={e => setSearchValue(e.target.value)} />}
        </>
    )
}

function getFilterButton(key, label, url){
    return (
        <label key={key} htmlFor={`#${key}`}>
            <input type="checkbox" value={key} id={key} />
            <img className="element" src={url} />
            <span>{label}</span>
        </label>
    )
}

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <div className="container">
            <SearchBar />
            <div className="filters">
                <ul className="elements">
                    {Object.keys(elements).map((k)=>getFilterButton(k, elements[k].label, `../assets/${elements[k].urlKey}.svg`))}
                </ul>
                <ul className="weapons">
                    {Object.keys(weapons).map((k)=>getFilterButton(k, weapons[k].label, `https://api.ambr.top/assets/UI/UI_GachaTypeIcon_${weapons[k].urlKey}.png`))}
                </ul>
            </div>
            <div className="characters">
                <div className="character"></div>
                <div className="character"></div>
                <div className="character"></div>
                <div className="character"></div>
                <div className="character"></div>
                <div className="character"></div>
                <div className="character"></div>
                <div className="character"></div>
                <div className="character"></div>
                <div className="character"></div>
            </div>
        </div>
    </React.StrictMode>
)