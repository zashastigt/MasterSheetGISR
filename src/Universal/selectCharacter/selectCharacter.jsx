import React, {useState} from 'react'
import './selectedCharacter.css'
import characterInfo from '../../data/testCharacterBB.json'

export default function SelectCharacter({addCharacter}) {
    const [show, setShow] = useState(false)

    function SelectChar() {
        return (
            <div className={'selectCharBox'}>
                {Object.keys(characterInfo).map((character, index) => (
                    <div key={index} className={'charBox'} onClick={() => {addCharacter(character)}}>
                        <span className={'BBName'}>{character}</span>
                        <img alt={'characterPicture'} src={characterInfo[character].img}/>
                    </div>
                ))}
                <button className={'close'} onClick={() => setShow(!show)}>X</button>
            </div>
        )
    }

    return (
        <>
            <button onClick={() => setShow(!show)}>Select Character</button>
            {show &&
                <SelectChar />
            }
        </>
    )
}