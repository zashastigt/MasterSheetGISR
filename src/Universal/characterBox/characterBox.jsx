import React, {useState} from 'react'
import './characterBox.css'
import postData from "../../data/postData.js";
import convert from "../convertArrayObject.js";

export default function CharacterBox({gameCharacter, game}) {
    const [character, setCharacter] = useState(gameCharacter)

    function ceColor(CE) {
        if (CE === 'C6' || CE === 'E6') {
            return 'all'
        } else if(CE === '') {
            return 'none'
        } else {
            return 'some'
        }
    }

    function changeLevel(direction, data, person) {
        if (direction === 'up' && (data === 'E6' || data === 'C6')) {
            console.log("Can't get much higher")
        } else if(direction === 'down' && data === '') {
            console.log("down in the dirt")
        } else {
            let count = data.charAt(1)
            let gameLetter = ''
            let newData

            if (game === 'StarRail') {
                gameLetter = 'E'
            } else if (game === 'Genshin') {
                gameLetter = 'C'
            }

            if (direction === 'up') {
                if (count === '') {
                    count = 0
                } else {
                    count++
                }
            } else if (direction === 'down') {
                if (count === '0') {
                    count = ''
                } else {
                    count--
                }
            }

            if (count === '') {
                newData = ''
            } else {
                newData = gameLetter + count
            }

            const newCE = Object.keys(character.CE).map(key => {
                if (key === person) {
                    return {[key]: newData}
                } else {
                    return {[key]: character.CE[key]}
                }
            })

            setCharacter({...character, CE: convert(newCE)})
            postData({Level: newData, Person: person, Name: character.Name, Game: game, Group: 'Character'})
        }
    }

    return(
        <div key={character.Name} className={'characterBox'}>
            <div className={'characterContainer'}>
                <div className={`characterPortrait`}>
                    <img className={'characterImgSR'} alt={'img'} src={character.Img}/>
                </div>
                <div className={`rarityStrip ${parseInt(character.Rarity) === 5 ? 'rarityFiveStar' : 'rarityFourStar'}`}></div>
                <div className={'characterInfo'}>
                    <img className={'characterElement'} alt={'img'} src={character.Element}/>
                    <img className={'characterGroup'} alt={'img'} src={character.Group}/>
                </div>
                <div className={'characterCE'}>
                    {Object.keys(character.CE).map(item => (
                        <div key={item} className={'CE'}>
                            <div className={'personName'}>{item}</div>
                            <div className={`CECount ${ceColor(character.CE[item])}`} >{character.CE[item]}</div>
                            <div className={'buttons'}>
                                {window.location.pathname.includes('StarRail') &&
                                    <>
                                        {character.CE[item] !== 'E6' &&
                                            <button onClick={() => changeLevel('up', character.CE[item], item, character.Name)}>+</button>
                                        }
                                        {character.CE[item] !== '' &&
                                            <button onClick={() => changeLevel('down', character.CE[item], item, character.Name)}>-</button>
                                        }
                                    </>
                                }
                                {window.location.pathname.includes('Genshin') &&
                                    <>
                                        {character.CE[item] !== 'C6' &&
                                            <button onClick={() => changeLevel('up', character.CE[item], item)}>+</button>
                                        }
                                        {character.CE[item] !== '' &&
                                            <button onClick={() => changeLevel('down', character.CE[item], item)}>-</button>
                                        }
                                    </>
                                }
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className={'characterName'}>{character.Name}</div>
        </div>
    )
}