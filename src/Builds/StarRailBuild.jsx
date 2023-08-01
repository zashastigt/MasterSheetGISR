import React from 'react'
import ReactDOM from 'react-dom/client'
import { useState, useEffect } from 'react'
import './StarRailBuild.css'
import '../Universal/gachaPage.css'
import StarRailBB from "./BuildBox/StarRailBB.jsx";
import characterInfo from '../data/testCharacterBB.json'


function BuildStarRail() {

    const gt = {
        Hook: {
            Name: "Hook",
            Weapon: "Woof! Walk Time!",
            RegularRelic1: "Messenger Traversing Hackerspace",
            RegularRelic2: "Messenger Traversing Hackerspace",
            PlanarRelic: "Rutilant Arena",
            Body: "CRIT Rate",
            Boots: "Speed",
            Sphere: "Elemental DMG",
            Link: "ATK%"
        },
        DanHeng: {
            Name: "DanHeng",
            Weapon: "Woof! Walk Time!",
            RegularRelic1: "Messenger Traversing Hackerspace",
            RegularRelic2: "Messenger Traversing Hackerspace",
            PlanarRelic: "Rutilant Arena",
            Body: "CRIT Rate",
            Boots: "Speed",
            Sphere: "Elemental DMG",
            Link: "ATK%"
        }

    }

    return (
        <>
            <div className={'BuildPage'}>
                <StarRailBB selectedCharacter={'Hook'} selectedWeapon={"2"} />
                <StarRailBB selectedCharacter={'DanHeng'} />
            </div>
            <div>
                {Object.keys(gt).map(item => (
                    <StarRailBB
                        selectedCharacter={gt[item]}
                    />
                ))}
            </div>
        </>

    )
}

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <div className="container">
            <BuildStarRail />
        </div>
    </React.StrictMode>
)
