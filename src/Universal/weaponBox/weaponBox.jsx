import React, {useState} from 'react'
import './weaponBox.css'

export default function WeaponBox({starRailWeapon, game}) {
    const [weapon, setWeapon] = useState(starRailWeapon)
    console.log(weapon[0].CE)
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
                                                <button>+</button>
                                            }
                                            {weapon.CE[item] !== '' &&
                                                <button>-</button>
                                            }
                                        </>
                                    }
                                    {window.location.pathname.includes('Genshin') &&
                                        <>
                                            {weapon.CE[item] !== 'R5' &&
                                                <button>+</button>
                                            }
                                            {weapon.CE[item] !== '' &&
                                                <button>-</button>
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