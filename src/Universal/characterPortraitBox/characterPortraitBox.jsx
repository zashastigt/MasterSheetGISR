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
        <div
            className={`characterPortraitBox ${parseInt(character.rank) === 5 ? 'rarityFiveStarBorder' : 'rarityFourStarBorder'}`}
            style={{ backgroundImage: `url(${character.Img})` }}
            onMouseOver={() => setVisible(true)}
            onMouseLeave={() => setVisible(false)}
            onClick={() => addCharacter ? handleAddClick(true) : handleAddClick(false)}>
            <div className={`${visible ? 'characterPortraitInfo' : ''}`}>
                <img className={'opaque weapon'} alt={'img'} src={character.types.combatType.Img} />
                <img className={'opaque weapon'} alt={'img'} src={character.types.pathType.Img} />
            </div>
            {!addCharacter ?
                <div className={`characterPortraitInteractionButton ${!addCharacter && visible ? '' : 'hideInteractions'}`} onClick={(e) => { e.stopPropagation(); handleRemoveClick() }}>
                    <img className={'characterPortraitInteractionButtonImg'} src={Trash} />
                </div>
                :
                ''}

        </div>
    )
}