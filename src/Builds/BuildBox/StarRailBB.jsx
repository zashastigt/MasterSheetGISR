import './StarRailBB.css'
import characterInfo from '../../data/testCharacterBB.json'
import weaponInfo from '../../data/testLightconeBB.json'
import relicInfo from '../../data/testRelicBB.json'
import {useEffect, useState} from "react";

export default function StarRailBB({selectedCharacter}) {


    return (
        <div className={'CharacterBB'}>
            <CharacterStats selectedCharacter={selectedCharacter} />
            <ChooseWeapon />
            <ChooseSet />
            <ChooseMainStats />
        </div>
    )
}

function CharacterStats({selectedCharacter}) {
    const [character, setCharacter] = useState(characterInfo[selectedCharacter])

    const stats = Object.keys(character.stats).map((item, index) => (
        <tr key={index}>
            <td>{item}</td>
            <td>{character.stats[item]}</td>
        </tr>
    ))

    return (
        <div className={'BBBox'}>
            <div className={'BBInfo'}>
                <span>{character.name}</span>
                <img alt={'characterPicture'} src={character.img} />
                <div>
                    <img className={'BBGroups'} alt={'element'} src={character.elementImg} />
                    <img className={'BBGroups'} alt={'group'} src={character.groupImg} />
                </div>

            </div>
            <div className={'BBTable'}>
                <table>
                    <tbody>
                        {stats}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

function ChooseWeapon() {
    const [weapon, setWeapon] = useState(weaponInfo["None"])
    const [weaponLv, setWeaponLv] = useState(weapon.effect.lv1)

    const stats = Object.keys(weapon.stats).map((item, index) => (
        <tr key={index}>
            <td>{item}</td>
            <td>{weapon.stats[item]}</td>
        </tr>
    ))

    return (
        <div className={'WeaponBB'}>
            <div>
                <select defaultValue={'None'} onChange={e => {setWeapon(weaponInfo[e.target.value])}}>
                    {Object.keys(weaponInfo).map((item, index) => (
                        <option key={index}>{item}</option>
                    ))}
                </select>

                <p>{weapon.name}</p>
                {weapon.name !== 'Select Light Cone' &&
                    <>
                        <div>
                            <img className={'BBGroups'} alt={'Weapon'} src={weapon.img} />
                            <img className={'BBGroups'} alt={'group'} src={weapon.groupImg} />
                        </div>
                        <table>
                            <tbody>
                            {stats}
                            </tbody>
                        </table>
                    </>
                }
            </div>
            <div>
                <select defaultValue={weapon.effect.lv1} onChange={e => setWeaponLv(e.target.value)}>
                    <option value={weapon.effect.lv1}>lv.1</option>
                    <option value={weapon.effect.lv2}>lv.2</option>
                    <option value={weapon.effect.lv3}>lv.3</option>
                    <option value={weapon.effect.lv4}>lv.4</option>
                    <option value={weapon.effect.lv5}>lv.5</option>
                </select>
                {weapon.name !== 'Select Light Cone' &&
                    <>
                        <p>{weaponLv}</p>
                    </>


                }
            </div>
        </div>
    )
}

function ChooseSet() {
    const [regularRelic, setRegularRelic] = useState()
    const [planarRelic, setPlanarRelic] = useState()

    console.log(relicInfo)

    return (
        <div>
            <div>
                <select></select>
                <select></select>
            </div>
            <div>
                <select defaultValue={'None'} onChange={e => {setPlanarRelic(weaponInfo[e.target.value])}}>
                    {Object.keys(relicInfo.PlanarRelic).map((item, index) => (
                        <option key={index}>{item}</option>
                    ))}
                </select>
            </div>

        </div>
    )
}

function ChooseMainStats() {
    return (
        <div className={'ChooseMainStat'}>
            <div>
                <span>Body</span>
                <select defaultValue={'None'}>
                    <option value={'None'}>None</option>
                    <option value={'ATK'}>ATK%</option>
                    <option value={'HP'}>HP%</option>
                    <option value={'DEF'}>DEF%</option>
                    <option value={'CR'}>CRIT Rate</option>
                    <option value={'CD'}>CRIT DMG</option>
                    <option value={'EHR'}>Effect Hit Rate</option>
                    <option value={'HB'}>Healing Bonus</option>
                </select>
            </div>
            <div>
                <span>Boots</span>
                <select defaultValue={'None'}>
                    <option value={'None'}>None</option>
                    <option value={'ATK'}>ATK%</option>
                    <option value={'HP'}>HP%</option>
                    <option value={'DEF'}>DEF%</option>
                    <option value={'S'}>Speed</option>
                </select>
            </div>
            <div>
                <span>Sphere</span>
                <select defaultValue={'None'}>
                    <option value={'None'}>None</option>
                    <option value={'ATK'}>ATK%</option>
                    <option value={'HP'}>HP%</option>
                    <option value={'DEF'}>DEF%</option>
                    <option value={'ED'}>Elemental DMG</option>
                </select>
            </div>
            <div>
                <span>Link</span>
                <select defaultValue={'None'}>
                    <option value={'None'}>None</option>
                    <option value={'ATK'}>ATK%</option>
                    <option value={'HP'}>HP%</option>
                    <option value={'DEF'}>DEF%</option>
                    <option value={'ER'}>Energy Regen</option>
                    <option value={'BE'}>Break Effect</option>
                </select>
            </div>
        </div>
    )
}




