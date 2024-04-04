import React, {useEffect, useState} from 'react'
import AddTeam from "./components/addTeam.jsx";
import FullCharacterList from "./components/fullCharacterList.jsx";
import '../SearchBar/searchBar.css'
import './Teams.css'

const GIElement = import.meta.glob('../../assets/GenshinElementImgs/*.svg', { eager: true })
const getImage = (icon) => (`https://api.ambr.top/assets/UI/${icon}.png`)

export default function Teams(props) {
    const [fullList, setFullList] = useState(props.characters)
    const [ownedList, setOwnedList] = useState(() => {
        const saved = localStorage.getItem("ownedList")
        const initialValue = JSON.parse(saved)
        return initialValue || {}
    })
    const [teamList, setTeamList] = useState(() => {
        const saved = localStorage.getItem("teamList")
        const initialValue = JSON.parse(saved)
        return initialValue || {}
    })
    const [usedList, setUsedList] = useState(() => {
        const saved = localStorage.getItem("usedList")
        const initialValue = JSON.parse(saved)
        return initialValue || []
    })

    const [showFullList, setShowFullList] = useState(false)
    const [showAddTeam, setShowAddTeam] = useState(false)

    useEffect(() => {
        localStorage.setItem("ownedList", JSON.stringify(ownedList))
        localStorage.setItem("teamList", JSON.stringify(teamList))
        localStorage.setItem("usedList", JSON.stringify(usedList))
    }, [ownedList, teamList, usedList])

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

    const removeTeam = (team) => {
        const {[team]: _, ...newList} = teamList
        setTeamList(newList)
        usedList.filter(character => !Object.values(teamList[team]).includes(character))
    }

    return (
        <div className={'TeamContainer'}>
            <div>
                <button onClick={() => setShowFullList(!showFullList)}>Show Full List</button>
                <button onClick={() => setShowAddTeam(!showAddTeam)}>Show Add Team</button>
            </div>
            {showFullList &&
                <FullCharacterList
                    fullList={fullList}
                    setFullList={setFullList}
                    ownedList={ownedList}
                    setOwnedList={setOwnedList}
                />}
            {showAddTeam &&
                <AddTeam
                    fullList={fullList}
                    ownedList={ownedList}
                    teamList={teamList}
                    setTeamList={setTeamList}
                    usedList={usedList}
                    setUsedList={setUsedList}
                    getImage={getImage}
                />}
            <Teams />
        </div>
    )
}
