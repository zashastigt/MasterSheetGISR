import React, {useState} from "react";
import OwnedCharacterList from "./ownedCharacterList.jsx";

export default function AddTeam(props) {
    const [teamName, setTeamName] = useState('')
    const [team, setTeam] = useState({1: undefined, 2: undefined, 3: undefined, 4: undefined})

    console.log(Object.keys(props.teamList).includes(teamName))

    const addToTeam = (character) => {

        for (let i = 1; i <= 4; i++) {
            if (team[i] === undefined && !Object.values(team).includes(character)){
                setTeam({...team, [i]: character})
                break
            }
        }
    }

    const removeFromTeam = (slot) => {
        setTeam({...team, [slot]: undefined})
    }
    Object.keys(props.teamList).includes(teamName)
    return (
        <div id={'addTeam'} className={'popUp'}>
            <div id={'addTeamBox'}>
                <input
                    className={'searchBox'}
                    type={'text'}
                    placeholder={'New team name'}
                    onChange={e => {setTeamName(e.target.value)}}
                />
                <div className={'team'}>
                    {Object.keys(team).map(slot => {
                            return (
                                <div key={slot} className={'teamSlot'} onClick={() => removeFromTeam(slot)}>
                                    {team[slot] === undefined ?
                                        "+":
                                        <img className={'characterImg'} alt={'pic'} src={props.getImage(props.fullList[team[slot]].icon)} />
                                    }
                                </div>
                            )
                        }

                    )}
                    <div onClick={() => {
                        if (Object.values(team).includes(undefined) && !Object.keys(props.teamList).includes(teamName)) {
                            console.log('nope')
                        } else {
                            props.setTeamList({...props.teamList, [teamName]: team})
                            props.setUsedList([...props.usedList, team[1], team[2], team[3], team[4]])
                        }
                    }}>Add Team</div>
                </div>
            </div>
            <div id={'addTeamCharacters'}>
                <OwnedCharacterList
                    fullList={props.fullList}
                    ownedList={props.ownedList}
                    usedList={props.usedList}
                    addToTeam={addToTeam}
                />
            </div>

        </div>
    )
}