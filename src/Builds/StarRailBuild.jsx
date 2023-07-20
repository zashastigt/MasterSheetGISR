import React from 'react'
import ReactDOM from 'react-dom/client'
import { useState, useEffect } from 'react'
import './StarRailBuild.css'
import '../Universal/gachaPage.css'
import StarRailBB from "./BuildBox/StarRailBB.jsx";


function BuildStarRail() {


    return (
        <div className={'BuildPage'}>
            <StarRailBB selectedCharacter={'Hook'} />
            <StarRailBB selectedCharacter={'Hook'} />
        </div>
    )
}

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <div className="container">
            <BuildStarRail />
        </div>
    </React.StrictMode>
)
