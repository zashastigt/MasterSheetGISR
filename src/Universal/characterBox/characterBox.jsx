import React, {useState} from 'react'
import ReactDOM from 'react-dom/client'
import testCharacter from '../../data/testCharacter.json'
import './characterBox.css'
// import SheetData from "../../data/sheetData.js";

export default function CharacterBox() {

    console.log(testCharacter)

    return(
        <div className={'characterContainer'}>
            <div className={'characterPortrait'}>
                <img className={'characterImg'} alt={'img'} src={testCharacter.img}/>
                <span className={'characterName'}>{testCharacter.name}</span>
            </div>
            <div className={'characterInfo'}>
                <img className={'characterElement'} alt={'img'} src={testCharacter.element}/>
                <img className={'characterGroup'} alt={'img'} src={testCharacter.group}/>
            </div>
            <div className={'characterCE'}>
                {Object.keys(testCharacter.CE).map(item => (
                    <div key={item} className={'CE'}>
                        <div className={'personName'}>{item}</div>
                        <div className={'CECount'}>{testCharacter.CE[item]}</div>
                        <div className={'buttons'}>
                            <button>+</button>
                            <button>-</button>
                        </div>
                    </div>
                    ))}
            </div>
        </div>
    )
}