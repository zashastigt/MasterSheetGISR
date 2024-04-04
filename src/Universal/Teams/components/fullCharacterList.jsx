import React from "react";
import CharacterPortrait from "./characterPortrait.jsx";

export default function FullCharacterList(props) {

    const addToOwned = (character) => {
        props.setOwnedList({...props.ownedList, [character]: props.fullList[character]})
    }

    const removeFromOwned = (character) => {
        const {[character]: _, ...newList} = props.ownedList
        props.setOwnedList(newList)
    }

    return(
        <div className={'popUp'}>
            <div id={'characterList'}>
                {Object.keys(props.fullList).map(character => {
                    return (
                        <div key={character}>
                            <CharacterPortrait
                                fullList={props.fullList}
                                character={character}
                                borderColor={Object.keys(props.ownedList).includes(character) ? 'darkgreen' : 'darkred'}
                                clickFunction={() => {Object.keys(props.ownedList).includes(character) ? removeFromOwned(character) : addToOwned(character)}}
                            />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}