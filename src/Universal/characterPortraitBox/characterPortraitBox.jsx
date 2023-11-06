import React, { useState } from 'react'
import Trash from '../../assets/trash.png'
import { sortingList } from '../../Universal/AddDuplicatesToJson.js'

export default function CharacterPortraitBox({ character, characterList, setCharacterList, addCharacter, setAddCharacter, setCharData }) {
    const [visible, setVisible] = useState(false)

    const handleAddClick = (addChar) => {
        if (addChar) {
            setAddCharacter(false)
            let alreadyAddedChar = false
            characterList.forEach(char => {
                if (char.id == character.id) alreadyAddedChar = true
            });
            if (!alreadyAddedChar) setCharacterList(charList => sortingList([...charList, character]))
        }
        else {
            setCharData(character)
        }
    }

    const handleRemoveClick = () => {
        const newCharList = characterList.filter(char => char.id != character.id);
        setCharacterList(() => [...newCharList])
    }

    return (
        <div className={`characterPortraitBox`} onMouseOver={() => setVisible(true)} onMouseLeave={() => setVisible(false)} onClick={() => addCharacter ? handleAddClick(true) : handleAddClick(false)}>
            <div className={`portrait ${visible ? '' : ''}`} >
                {!addCharacter ?
                    <div className={`characterPortraitInteractionButton ${!addCharacter && visible ? '' : 'hideInteractions'}`} onClick={() => handleRemoveClick()}>
                        <img className={'characterPortraitInteractionButtonImg'} src={Trash} />
                    </div>
                    :
                    ''}
                <img alt={'img'} src={character.Img} className={`${visible ? 'revertScale' : ''}`} />
            </div>
            <div className='relative'>
                <img className={'characterPortraitInfo weapon'} alt={'img'} src={character.types.combatType.Img} />
                <img className={'characterPortraitInfo weapon'} alt={'img'} src={character.types.pathType.Img} />
            </div>
            <div className={`rarityStripHorizontal ${parseInt(character.rank) === 5 ? 'rarityFiveStar' : 'rarityFourStar'}`}></div>
        </div>
    )
}