import React from 'react'
import ReactDOM from 'react-dom/client'
import { useState, useEffect } from 'react'
import './GenshinPage.css'
import elements from '../data/elements.json'
import weapons from '../data/weapons.json'
import testCharacter from '../data/testCharacter.json'
import CharacterBox from "../Universal/characterBox/characterBox.jsx";

function SearchBar() {

    const [searchVisibility, setSearchVisibility] = useState(false)
    const [searchValue, setSearchValue] = useState('')

    useEffect(() => {
        document.onkeydown = function (e) {
            if (e.key.length === 1) setSearchVisibility(true);
        };
    });

    useEffect(() => {
        if (searchValue === '') {
            setSearchVisibility(false);
        }
    }, [searchValue]);

    return (
        <>
            {searchVisibility && <input className="search" type="text" autoFocus value={searchValue} onChange={e => setSearchValue(e.target.value)} />}
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
            <section className="characters">
                <article className="character">
                    <img className="rarityFiveStar"  src="https://api.ambr.top/assets/UI/UI_AvatarIcon_Yae.png" />
                        <div>
                            <h2>Yae Miko</h2>
                            <img className="element" src="../assets/electro.svg" />
                            <img className="weapon" src="https://api.ambr.top/assets/UI/UI_GachaTypeIcon_Catalyst.png" />
                        </div>
                        <div className="playerInfo">
                        <button>/\</button>
                            <button>/\</button>
                            <button>/\</button>
                            <button>\/</button>
                            <button>\/</button>
                            <button>\/</button>
                            <h3>Zasha</h3>
                            <h3>Wilco</h3>
                            <h3>Rick</h3>


                        </div>
                </article>
            </section>
            <div className={'characterList'}><CharacterBox characterList={testCharacter} /></div>



        </div>
    </React.StrictMode>
)