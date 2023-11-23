import React, {useState} from 'react'
import '../SearchBar/searchBar.css'
import './Teams.css'


export default function Teams(props) {
    const [fullList, setFullList] = useState(props.characters)
    const [ownedList, setOwnedList] = useState({})
    const [teamList, setTeamList] = useState({})
    const [teamName, setTeamName] = useState('')

    console.log(teamList)
    console.log(teamName)

    function removeCharacter(key) {

        const newList = ownedList
        delete newList.key
        setOwnedList(newList)
    }


    function CharacterList(props) {
        return(
            <table>
                <tbody>
                {Object.keys(props.list).map(character => {
                    return (
                        <tr key={character}>
                            <td>{fullList[character].name}</td>
                            {}
                            <td>
                                <button onClick={e =>
                                    setOwnedList({...ownedList, [character]: fullList[character]})
                                }>Add</button>
                            </td>
                            <td>
                                <button>Remove</button>
                            </td>
                        </tr>
                    )
                })}
                </tbody>
            </table>
        )
    }

    function Teams() {

        let newTeam = ['1', '2', '3', '4']

        return (
            <>
                <table>
                    <tbody>
                    {Object.keys(teamList).map(team => {
                        return (
                            <tr>
                                <td>{teamList[team][0]}</td>
                                <td>{teamList[team][1]}</td>
                                <td>{teamList[team][2]}</td>
                                <td>{teamList[team][3]}</td>
                            </tr>
                        )
                    })}

                    </tbody>
                </table>

                <button onClick={() => {
                    setTeamList({...teamList, [teamName]: newTeam})
                }}>tes</button>
            </>
        )
    }

    return (
        <div className={'TeamContainer'}>
            <CharacterList list={fullList} />
            <CharacterList list={ownedList} />
            <h3>New team name</h3>
            <input
                type={'text'}
                onChange={e => {setTeamName(e.target.value)}}
            />
            <Teams />
        </div>
    )
}
