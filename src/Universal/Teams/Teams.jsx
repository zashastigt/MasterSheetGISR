import React, {useState} from 'react'
import '../SearchBar/searchBar.css'
import './Teams.css'


export default function Teams(props) {
    const [fullList, setFullList] = useState(props.characters)
    const [ownedList, setOwnedList] = useState({})
    const [teamList, setTeamList] = useState({test: {character1: 1, character2: 2, character3: 3, character4: 4}})

    const [showFullList, setShowFullList] = useState(false)
    const [showOwnedList, setShowOwnedList] = useState(false)
    const [showAddTeam, setShowAddTeam] = useState(false)

    console.log(fullList)
    console.log(teamList)

    const getImage = (icon) => (`https://api.ambr.top/assets/UI/${icon}.png`)

    const removeTeam = (team) => {
        const {[team]: _, ...newList} = teamList
        setTeamList(newList)
    }


    function FullCharacterList() {



        return(
            <table>
                <tbody>
                {Object.keys(fullList).map(character => {
                    return (
                        <tr key={character}>
                            <td>{fullList[character].name}</td>
                            <td>
                                <button onClick={e =>
                                    setOwnedList({...ownedList, [character]: fullList[character]})
                                }>Add</button>
                            </td>
                        </tr>
                    )
                })}
                </tbody>
            </table>
        )
    }

    function OwnedCharacterList(props) {

        const removeCharacter = (character) => {
            const {[character]: _, ...newList} = ownedList
            setOwnedList(newList)
        }

        return(
            <table>
                <tbody>
                {Object.keys(ownedList).map(character => {
                    console.log(fullList[character].icon)
                    return (
                        <tr key={character}>
                            <td>{fullList[character].name}</td>
                            <img src={getImage(fullList[character].icon)} />
                            <td>
                                <button onClick={e =>
                                    setOwnedList({...ownedList, [character]: fullList[character]})
                                }>Add</button>
                            </td>
                            <td>
                                <button onClick={() => removeCharacter(character)}>Remove</button>
                            </td>
                        </tr>
                    )
                })}
                </tbody>
            </table>
        )
    }

    function Teams() {

        return (
            <>
                {Object.keys(teamList).map(team => {
                    return (
                        <div className={'team'} key={team}>
                            <div>
                                {/*<img src={getImage(fullList[character].icon)} />*/}
                                {teamList[team].character1}
                            </div>
                            <div>
                                {teamList[team].character2}
                            </div>
                            <div>
                                {teamList[team].character3}
                            </div>
                            <div>
                                {teamList[team].character4}
                            </div>
                            <div onClick={() => removeTeam(team)}>Remove</div>
                        </div>
                    )
                })}
            </>
        )
    }

    function AddTeam() {
        const [teamName, setTeamName] = useState('')
        const [team, SetTeam] = useState({1: undefined, 2: undefined, 3: undefined, 4: undefined})
        return (
            <>
                <h3>New team name</h3>
                <input
                    type={'text'}
                    onChange={e => {setTeamName(e.target.value)}}
                />

                <div className={'team'}>
                    <div>+</div>
                    <div>+</div>
                    <div>+</div>
                    <div>+</div>
                    <div onClick={() => {
                        if (Object.values(team).includes(undefined)) {
                            console.log('nope')
                        } else {
                            setTeamList({...teamList, [teamName]: team})
                        }
                    }}>Add Team</div>
                </div>


            </>
        )
    }

    return (
        <div className={'TeamContainer'}>
            <button onClick={() => setShowFullList(!showFullList)}>Show Full List</button>
            <button onClick={() => setShowOwnedList(!showOwnedList)}>Show Owned List</button>
            <button onClick={() => setShowAddTeam(!showAddTeam)}>Show Add Team</button>
            {showFullList && <FullCharacterList list={fullList} />}
            {showOwnedList && <OwnedCharacterList />}
            {showAddTeam && <AddTeam />}
            <Teams />
        </div>
    )
}
