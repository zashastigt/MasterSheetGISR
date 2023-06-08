import React from 'react'
import './characterBox.css'

export default function CharacterBox({characterList}) {
    function ceColor(CE) {
        if (CE === 'C6' || CE === 'E6') {
            return 'all'
        } else if(CE === '') {
            return 'none'
        } else {
            return 'some'
        }
    }


     return characterList.map(character => {
        return(
            <div key={character.Name} className={'characterContainer'}>
                <div className={`characterPortrait ${parseInt(character.Rarity) === 5 ? 'rarityFiveStar' : 'rarityFourStar'}`}>
                    <img className={'characterImg' } alt={'img'} src={character.Img}/>
                    <div className={'characterName'}>{character.Name}</div>
                </div>
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
                                <button>+</button>
                                <button>-</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        )
    })
}