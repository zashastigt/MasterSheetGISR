import React, {useState} from 'react'
import '../SearchBar/searchBar.css'
import './Teams.css'



export default function Teams(props) {
    const [fullList, setFullList] = useState(props.characters)
    const [ownedList, setOwnedList] = useState({})
    const [teamList, setTeamList] = useState({})
    const [usedList, setUsedList] = useState([])

    const [showFullList, setShowFullList] = useState(false)
    const [showAddTeam, setShowAddTeam] = useState(false)

    const getImage = (icon) => (`https://api.ambr.top/assets/UI/${icon}.png`)

    const removeTeam = (team) => {
        const {[team]: _, ...newList} = teamList
        setTeamList(newList)
    }

    const CharacterPortrait = (props) => {
        const addElement = () => {
            switch (fullList[props.character].element) {
                case 'Wind':
                    return '../../assets/GenshinElementImgs/anemo.svg'
                case 'Ice':
                    return '../../assets/GenshinElementImgs/cryo.svg'
                case 'Grass':
                    return '../../assets/GenshinElementImgs/dendro.svg'
                case 'Electric':
                    return '../../assets/GenshinElementImgs/electro.svg'
                case 'Rock':
                    return '../../assets/GenshinElementImgs/geo.svg'
                case 'Water':
                    return '../../assets/GenshinElementImgs/hydro.svg'
                case 'Fire':
                    return '../../assets/GenshinElementImgs/pyro.svg'
            }
        }

        return(
                <div id={'characterPortrait'} style={{borderColor: props.borderColor}} onClick={props.clickFunction}>
                    <img className={'elementImg'} alt={'elem'} src={addElement()} />
                    <img draggable={false} className={'characterImg'} alt={'pic'} src={getImage(fullList[props.character].icon)} />
                    <div>{fullList[props.character].name}</div>
                </div>
            )

    }


    function FullCharacterList() {

        const addToOwned = (character) => {
            setOwnedList({...ownedList, [character]: fullList[character]})
        }

        const removeFromOwned = (character) => {
            const {[character]: _, ...newList} = ownedList
            setOwnedList(newList)
        }

        return(
            <div className={'popUp'}>
                <div id={'characterList'}>
                    {Object.keys(fullList).map(character => {
                        return (
                            <div key={character}>
                                <CharacterPortrait
                                    character={character}
                                    borderColor={Object.keys(ownedList).includes(character) ? 'darkgreen' : 'darkred'}
                                    clickFunction={() => {Object.keys(ownedList).includes(character) ? removeFromOwned(character) : addToOwned(character)}}
                                />
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }

    function OwnedCharacterList(props) {
        return(
            <div id={'ownedList'}>
                {Object.keys(ownedList).map(character => {
                    if (!usedList.includes(character)) {
                        return (
                            <div key={character}>
                                <CharacterPortrait character={character} clickFunction={() => {props.addToTeam(character)}} />
                            </div>
                        )
                    }

                })}
            </div>
        )
    }

    function Teams() {
        return (
            <div id={'teamlist'}>
                {Object.keys(teamList).map(team => {
                    return (
                        <div className={'team'} key={team}>
                            <div className={'teamSlot'}>
                                <img alt={"characterImg"} src={getImage(fullList[teamList[team][1]].icon)} />
                                <span>{fullList[teamList[team][1]].name}</span>
                            </div>
                            <div className={'teamSlot'}>
                                <img alt={"characterImg"} src={getImage(fullList[teamList[team][2]].icon)} />
                                <span>{fullList[teamList[team][2]].name}</span>
                            </div>
                            <div className={'teamSlot'}>
                                <img alt={"characterImg"} src={getImage(fullList[teamList[team][3]].icon)} />
                                <span>{fullList[teamList[team][3]].name}</span>
                            </div>
                            <div className={'teamSlot'}>
                                <img alt={"characterImg"} src={getImage(fullList[teamList[team][4]].icon)} />
                                <span>{fullList[teamList[team][4]].name}</span>
                            </div>
                            <div onClick={() => removeTeam(team)}>Remove</div>
                        </div>
                    )
                })}
            </div>
        )
    }

    function AddTeam() {
        const [teamName, setTeamName] = useState('')
        const [team, setTeam] = useState({1: undefined, 2: undefined, 3: undefined, 4: undefined})

        console.log(Object.keys(teamList).includes(teamName))

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
        Object.keys(teamList).includes(teamName)
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
                                        <img className={'characterImg'} alt={'pic'} src={getImage(fullList[team[slot]].icon)} />
                                    }
                                </div>
                            )
                        }

                        )}
                        <div onClick={() => {
                            if (Object.values(team).includes(undefined) && !Object.keys(teamList).includes(teamName)) {
                                console.log('nope')
                            } else {
                                setTeamList({...teamList, [teamName]: team})
                                setUsedList([...usedList, team[1], team[2], team[3], team[4]])
                            }
                        }}>Add Team</div>
                    </div>
                </div>
                <div id={'addTeamCharacters'}>
                    <OwnedCharacterList addToTeam={addToTeam} />
                </div>

            </div>
        )
    }

    return (
        <div className={'TeamContainer'}>
            <button onClick={() => setShowFullList(!showFullList)}>Show Full List</button>
            <button onClick={() => setShowAddTeam(!showAddTeam)}>Show Add Team</button>
            {showFullList && <FullCharacterList list={fullList} />}
            {showAddTeam && <AddTeam />}
            <Teams />
        </div>
    )
}
