import React from 'react'
import ReactDOM from 'react-dom/client'
import { useState, useRef, useEffect } from 'react'
import './GenshinPage.css'

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


ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <div className="container">
            <SearchBar />
            <div className="filters">
                <div className="elements">
                    <label>
                        <input type="checkbox" value="Pyro" id="Pyro" />
                        <img className="element" src="../assets/pyro.svg" />
                        Pyro
                    </label>
                    <label>
                        <input type="checkbox" value="Cryo" id="Cryo" />
                        <img className="element" src="../assets/cryo.svg"/>
                        Cryo
                    </label>
                    <label>
                        <input type="checkbox" value="Hydro" id="Hydro" />
                        <img className="element" src="../assets/hydro.svg" />
                        Hydro
                    </label>
                    <label>
                        <input type="checkbox" value="Electro" id="Electro" />
                        <img className="element" src="../assets/electro.svg" />
                        Electro
                    </label>
                    <label>
                        <input type="checkbox" value="Anemo" id="Anemo" />
                        <img className="element" src="../assets/anemo.svg" />
                        Anemo
                    </label>
                    <label>
                        <input type="checkbox" value="Geo" id="Geo" />
                        <img className="element" src="../assets/geo.svg" />
                        Geo
                    </label>
                    <label>
                        <input type="checkbox" value="Dendro" id="Dendro" />
                        <img className="element" src="../assets/dendro.svg" />
                        Dendro
                    </label>
                </div>
                <div className="weapons">
                    <label>
                        <input type="checkbox" value="Sword" id="Sword" />
                        <img className="weapon" src="https://api.ambr.top/assets/UI/UI_GachaTypeIcon_Sword.png" />
                        Sword
                    </label>
                    <label>
                        <input type="checkbox" value="Claymore" id="Claymore" />
                        <img className="weapon" src="https://api.ambr.top/assets/UI/UI_GachaTypeIcon_Claymore.png" />
                        Claymore
                    </label>
                    <label>
                        <input type="checkbox" value="Bow" id="Bow" />
                        <img className="weapon" src="https://api.ambr.top/assets/UI/UI_GachaTypeIcon_Bow.png" />
                        Bow
                    </label>
                    <label>
                        <input type="checkbox" value="Polearm" id="Polearm" />
                        <img className="weapon" src="https://api.ambr.top/assets/UI/UI_GachaTypeIcon_Pole.png" />
                        Polearm
                    </label>
                    <label>
                        <input type="checkbox" value="Catalyst" id="Catalyst" />
                        <img className="weapon" src="https://api.ambr.top/assets/UI/UI_GachaTypeIcon_Catalyst.png" />
                        Catalyst
                    </label>
                </div>
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