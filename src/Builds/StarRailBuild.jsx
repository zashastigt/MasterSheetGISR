import React from 'react'
import ReactDOM from 'react-dom/client'
import { useState, useEffect } from 'react'
import './StarRailBuild.css'
import '../Universal/gachaPage.css'
import StarRailBB from "./BuildBox/StarRailBB.jsx";
import SelectCharacter from "../Universal/selectCharacter/selectCharacter.jsx";
import characterInfo from '../data/testCharacterBB.json'

function BuildStarRail() {
    const [charList, setCharList] = useState(JSON.parse(localStorage.getItem('characterlist')))
    const [loading, setLoading] = useState(true)

    React.useEffect(() => {
        window.addEventListener('storage', () => {
            // When local storage changes, dump the list to
            // the console.
            setCharList(JSON.parse(localStorage.getItem('characterlist')) || [])
        });
    }, [])

    useEffect(() => {
        localStorage.setItem("characterlist", JSON.stringify(charList))
    }, [charList])

    useEffect(() => {
        if (charList === null)
            setCharList({})
            setLoading(false)
    }, [])

    if (loading) {
        return <div>Loading...</div>
    }

    return (
        <>
            <SelectCharacter addCharacter={addCharacter} />
            <div>
                {Object.keys(charList).map((character, index) => (
                    <StarRailBB
                        key={index}
                        selectedCharacter={charList[character]}
                        deleteFrom={deleteInStorage}
                    />
                ))}
            </div>
        </>
    )

    function deleteInStorage(characterToDelete) {
        const {[characterToDelete]: deleted, ...newList2} = charList
        setCharList(newList2)
    }

    function addCharacter(character) {
        setCharList({
            ...charList,
            [character]: {
                Name: character,
                Weapon: "None",
                WeaponLv: "lv1",
                RegularRelic1: "None",
                RegularRelic2: "None",
                PlanarRelic: "None",
                Body: "None",
                Boots: "None",
                Sphere: "None",
                Link: "None"
            }
        })
    }
}

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <div className="container">
            <BuildStarRail />
        </div>
    </React.StrictMode>
)
