import React from "react";
import CharacterPortrait from "./characterPortrait.jsx";

export default function OwnedCharacterList(props) {
    return(
        <div id={'ownedList'}>
            {Object.keys(props.ownedList).map(character => {
                if (!props.usedList.includes(character)) {
                    return (
                        <div key={character}>
                            <CharacterPortrait
                                fullList={props.fullList}
                                character={character}
                                clickFunction={() => {props.addToTeam(character)}}
                            />
                        </div>
                    )
                }
            })}
        </div>
    )
}