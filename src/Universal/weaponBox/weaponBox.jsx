import React, {useState} from 'react'
import './weaponBox.css'
import convert from "../convertArrayObject.js";
import postData from "../../data/postData.js";

export default function WeaponBox({gameWeapon, game}) {
    const [weapon, setWeapon] = useState(gameWeapon)
    function ceColor(CE) {
        if (CE === 'R5' || CE === 'S5') {
            return 'all'
        } else if(CE === '') {
            return 'none'
        } else {
            return 'some'
        }
    }

    function rarity(rarity) {
        if (rarity === 5) {
            return 'rarityFiveStar'
        } else if (rarity === 4) {
            return 'rarityFourStar'
        } else {
            return 'rarityThreeStar'
        }
    }

    function changeLevel(direction, data, person) {
        if (direction === 'up' && (data === 'S5' || data === 'R5')) {
            console.log("Can't get much higher")
        } else if(direction === 'down' && data === '') {
            console.log("down in the dirt")
        } else {
            let count = data.charAt(1)
            let gameLetter = ''
            let newData

            if (game === 'StarRail') {
                gameLetter = 'S'
            } else if (game === 'Genshin') {
                gameLetter = 'R'
            }

            if (direction === 'up') {
                if (count === '') {
                    count = 1
                } else {
                    count++
                }
            } else if (direction === 'down') {
                if (count === '1') {
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

            const newCE = Object.keys(weapon.CE).map(key => {
                if (key === person) {
                    return {[key]: newData}
                } else {
                    return {[key]: weapon.CE[key]}
                }
            })

            setWeapon({...weapon, CE: convert(newCE)})
            postData({Level: newData, Person: person, Name: weapon.Name, Game: game, Group: 'Weapon'})
        }
    }


        return(
            <div key={weapon.Name} className={'weaponBox'}>
                <div className={'weaponContainer'}>
                    <div className={`weaponPortrait`}>
                        <img className={'weaponImgSR'} alt={'img'} src={weapon.Img}/>
                    </div>
                    <div className={`rarityStrip ${rarity(parseInt(weapon.Rarity))}`}></div>
                    <div className={'weaponInfo'}>
                        <img className={'weaponGroup'} alt={'img'} src={weapon.Group}/>
                    </div>
                    <div className={'weaponCE'}>
                        {Object.keys(weapon.CE).map(item => (
                            <div key={item} className={'CE'}>
                                <div className={'personName'}>{item}</div>
                                <div className={`CECount ${ceColor(weapon.CE[item])}`} >{weapon.CE[item]}</div>
                                <div className={'buttons'}>
                                    {window.location.pathname.includes('StarRail') &&
                                        <>
                                            {weapon.CE[item] !== 'S5' &&
                                                <button className="up" onClick={() => changeLevel('up', weapon.CE[item], item, weapon.Name)}>+</button>
                                            }
                                            {weapon.CE[item] !== '' &&
                                                <button className="down" onClick={() => changeLevel('down', weapon.CE[item], item, weapon.Name)}>-</button>
                                            }
                                        </>
                                    }
                                    {window.location.pathname.includes('Genshin') &&
                                        <>
                                            {weapon.CE[item] !== 'R5' &&
                                                <button className="up" onClick={() => changeLevel('up', weapon.CE[item], item, weapon.Name)}>+</button>
                                            }
                                            {weapon.CE[item] !== '' &&
                                                <button className="down" onClick={() => changeLevel('down', weapon.CE[item], item, weapon.Name)}>-</button>
                                            }
                                        </>
                                    }
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className={'weaponName'}>{weapon.Name}</div>
            </div>

        )
}