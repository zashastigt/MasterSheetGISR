import './StarRailBB.css'
import characterInfo from '../../data/testCharacterBB.json'
import weaponInfo from '../../data/testLightconeBB.json'
import relicInfo from '../../data/testRelicBB.json'
import statInfo from '../../data/testStatsBB.json'
import React, {useEffect, useState} from "react";

export default function StarRailBB({selectedCharacter, deleteFrom}) {
    const [characterPicked, setCharacterPicked] = useState(selectedCharacter)
    const [folded, setFolded] = useState(false)

    useEffect(() => {
        setCharacterPicked(selectedCharacter)
    }, [selectedCharacter])

    return (
        <div className={'CharacterBB'}>
            {folded ?
                <>
                    <div>
                        <div className={'CharacterBBCM'}>
                            <button onClick={() => setFolded(!folded)}>
                                <CharacterStats selectedCharacter={characterPicked}/>
                            </button>
                            <ChooseMainStats selectedCharacter={characterPicked}/>
                        </div>
                        <ChooseWeapon selectedCharacter={characterPicked}/>
                    </div>
                    <ChooseSet selectedCharacter={characterPicked}/>
                    <button onClick={() => {
                        deleteFrom(characterPicked.Name)
                        setFolded(!folded)
                    }}>delete</button>
                </>
                :
                <>
                    <button onClick={() => setFolded(!folded)}>
                        <CharacterStats selectedCharacter={characterPicked}/>
                    </button>
                </>
            }
        </div>
    )



    function changeInStorage(where, what) {
        const newList = JSON.stringify({
            ...JSON.parse(localStorage.getItem('characterlist')),
            [characterPicked.Name]: {
                ...JSON.parse(localStorage.getItem('characterlist'))[characterPicked.Name],
                [where]: what,
            }
        })
        const newList2 = JSON.stringify({
                ...JSON.parse(localStorage.getItem('characterlist'))[characterPicked.Name],
                [where]: what,
        })
        localStorage.setItem("characterlist", newList)
        setCharacterPicked(JSON.parse(newList2))
    }

    function CharacterStats({selectedCharacter}) {
        const [character, setCharacter] = useState(characterInfo[selectedCharacter.Name])

        const stats = Object.keys(character.stats).map((item, index) => (
            <tr key={index}>
                <td>{item}</td>
                <td>{Math.round(character.stats[item])}</td>
            </tr>
        ))

        return (
            <div className={'BBBox'}>
                <div className={'BBInfo'}>
                    <img alt={'characterPicture'} src={character.img}/>
                    <div>
                        <img className={'BBGroups'} alt={'element'} src={character.elementImg}/>
                        <img className={'BBGroups'} alt={'group'} src={character.groupImg}/>
                    </div>
                </div>
                <div className={'BBTable'}>
                    <span className={'BBName'}>{character.name}</span>
                    <table>
                        <tbody>
                        {stats}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }

    function ChooseWeapon({selectedCharacter}) {
        const [weapon, setWeapon] = useState(weaponInfo[selectedCharacter.Weapon])
        const [weaponLv, setWeaponLv] = useState(weapon.effect[selectedCharacter.WeaponLv])

        const stats = Object.keys(weapon.stats).map((item, index) => (
            <tr key={index}>
                <td>{item}</td>
                <td>{weapon.stats[item]}</td>
            </tr>
        ))

        return (
            <div className={'WeaponBB BBBox'}>
                <div>
                    <select defaultValue={selectedCharacter.Weapon} onChange={(e) =>{
                        changeInStorage('Weapon', e.target.value)
                        setWeapon(weaponInfo[e.target.value])
                        setWeaponLv(weapon.effect[selectedCharacter.WeaponLv])
                    }}>
                        {Object.keys(weaponInfo).map((item, index) => (
                            <option key={index}>{item}</option>
                        ))}
                    </select>
                    <select defaultValue={selectedCharacter.WeaponLv} onChange={(e) => {
                        changeInStorage('WeaponLv', e.target.value)
                        setWeaponLv(weapon.effect[selectedCharacter.WeaponLv])
                        console.log("f")
                    }}>
                        <option value={'lv1'}>lv.1</option>
                        <option value={'lv2'}>lv.2</option>
                        <option value={'lv3'}>lv.3</option>
                        <option value={'lv4'}>lv.4</option>
                        <option value={'lv5'}>lv.5</option>
                    </select>
                </div>
                <div className={'WeaponBBInfo'}>
                    {weapon.name !== 'Select Light Cone' &&
                        <>
                            <div>
                                <div>
                                    <img className={'BBGroups'} alt={'Weapon'} src={weapon.img}/>
                                    <img className={'BBGroups'} alt={'group'} src={weapon.groupImg}/>
                                </div>
                                <div className={'WeaponBBStats'}>
                                    <table>
                                        <tbody>
                                        {stats}
                                        </tbody>
                                    </table>
                                    <span>{weaponLv}</span>
                                </div>
                            </div>
                        </>
                    }
                </div>
            </div>
        )
    }

    function ChooseSet({selectedCharacter}) {
        const [regularRelic1, setRegularRelic1] = useState(relicInfo.RegularRelic[selectedCharacter.RegularRelic1])
        const [regularRelic2, setRegularRelic2] = useState(relicInfo.RegularRelic[selectedCharacter.RegularRelic2])
        const [planarRelic, setPlanarRelic] = useState(relicInfo.PlanarRelic[selectedCharacter.PlanarRelic])

        function RegularRelicEffect() {
            if (regularRelic1 === regularRelic2) {
                return (
                    <div>
                        <p>{regularRelic1.set2}</p>
                        <p>{regularRelic1.set4}</p>
                    </div>
                )
            } else {
                return (
                    <div>
                        <p>{regularRelic1.set2}</p>
                        <p>{regularRelic2.set2}</p>
                    </div>
                )
            }
        }

        return (
            <div className={'selectRelic BBBox'}>
                <div>
                    <h2>Regular relic set</h2>
                    <div>
                        <select defaultValue={selectedCharacter.RegularRelic1} onChange={(e) => {
                            changeInStorage('RegularRelic1', e.target.value)
                            setRegularRelic1(relicInfo.RegularRelic[e.target.value])
                        }}>
                            {Object.keys(relicInfo.RegularRelic).map((item, index) => (
                                <option key={index}>{item}</option>
                            ))}
                        </select>
                        <select defaultValue={selectedCharacter.RegularRelic2} onChange={(e) => {
                            changeInStorage('RegularRelic2', e.target.value)
                            setRegularRelic2(relicInfo.RegularRelic[e.target.value])
                        }}>
                            {Object.keys(relicInfo.RegularRelic).map((item, index) => (
                                <option key={index}>{item}</option>
                            ))}
                        </select>
                        <div>
                            <RegularRelicEffect/>
                        </div>
                    </div>
                </div>
                <div>
                    <h2>Planar relic set</h2>
                    <div>
                        <select defaultValue={selectedCharacter.PlanarRelic} onChange={(e) => {
                            changeInStorage('PlanarRelic', e.target.value)
                            setPlanarRelic(relicInfo.PlanarRelic[e.target.value])
                        }}>
                            {Object.keys(relicInfo.PlanarRelic).map((item, index) => (
                                <option key={index}>{item}</option>
                            ))}
                        </select>
                    </div>
                    <div>
                        <p>{planarRelic.set2}</p>
                    </div>
                </div>
            </div>
        )
    }

    function ChooseMainStats({selectedCharacter}) {
        return (
            <div className={'ChooseMainStat BBBox'}>
                {Object.keys(statInfo).map((item, index) => (
                    <div key={index}>
                        <span>{item}</span>
                        <div>
                            <select defaultValue={selectedCharacter[item]} onChange={(e) => changeInStorage(item, e.target.value)}>
                                {statInfo[item].map((stat, index) => (
                                    <option key={index}>{stat}</option>
                                ))}
                            </select>
                        </div>
                    </div>
                ))}
            </div>
        )
    }
}




