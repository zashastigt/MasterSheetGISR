import React, { useState, useEffect, useRef } from 'react'
import '../../Universal/gachaPage.css'
import '../../StarRailOptimizer/StarRailOptimizerPage.css'
import '../../Universal/SearchBar/searchBar.css'
import { getSRDataWithImages } from '../../data/addImagesToData.js'
import elementsSR from '../../data/elementsSR.json'
import paths from '../../data/paths.json'
import Filters, { Filtering } from '../../Universal/filterButton.jsx'
import { sortingList } from '../../Universal/AddDuplicatesToJson.js'
import CharacterData from "./characterInfo.jsx";

export default function CharacterInfo(props) {

    return (
        <>
            <div className='container charDetailsBackground'>

                <div>
                    <img alt={'img'} src={props.charData.Img} />
                    <input type="range" min="1" max="80" />
                </div>

                <ul className='charStatBackground'>
                    <li><p>HP</p></li>
                    <li><p>ATK</p></li>
                    <li><p>DEF</p></li>
                    <li><p>SPD</p></li>
                </ul>

                <div>
                    <input type="range" min="1" max="9"/>
                    <ul></ul>
                </div>

                <div>
                    <input type="range" min="1" max="15"/>
                    <ul></ul>
                </div>

                <div>
                    <input type="range" min="1" max="15"/>
                    <ul></ul>
                </div>

                <div>
                    <input type="range" min="1" max="15"/>
                    <ul></ul>
                </div>

                <div>exitbox</div>

                <div>
                    artifacts
                    <div>head</div>
                    <div>hands</div>
                    <div>body</div>
                    <div>boots</div>
                    <div>sphere</div>
                    <div>rope</div>
                </div>
            </div>
        </>
    )
}