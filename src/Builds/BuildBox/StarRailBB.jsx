import './StarRailBB.css'
import characterInfo from '../../data/testCharacterBB.json'
import {useState} from "react";

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
                    <img className={'BBGroups'} alt={'element'} src={character.element} />
                    <img className={'BBGroups'} alt={'group'} src={character.group} />
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
    return (
        <div>
            <select></select>
        </div>
    )
}

function ChooseSet() {
    return (
        <div>
            <select></select>
        </div>
    )
}

function ChooseMainStats() {
    return (
        <div>
            <div>
                <span>Body</span>
                <select>
                    <option disabled selected>---</option>
                    <option>ATK%</option>
                    <option>HP%</option>
                    <option>DEF%</option>
                    <option>CRIT Rate</option>
                    <option>CRIT DMG</option>
                    <option>Effect Hit Rate</option>
                    <option>Healing Bonus</option>
                </select>
            </div>
            <div>
                <span>Boots</span>
                <select>
                    <option disabled selected>---</option>
                    <option>ATK%</option>
                    <option>HP%</option>
                    <option>DEF%</option>
                    <option>Speed</option>
                </select>
            </div>
            <div>
                <span>Sphere</span>
                <select>
                    <option disabled selected>---</option>
                    <option>ATK%</option>
                    <option>HP%</option>
                    <option>DEF%</option>
                    <option>Elemental DMG</option>
                </select>
            </div>
            <div>
                <span>Link</span>
                <select>
                    <option disabled selected>---</option>
                    <option>ATK%</option>
                    <option>HP%</option>
                    <option>DEF%</option>
                    <option>Energy Regen</option>
                    <option>Break Effect</option>
                </select>
            </div>
        </div>
    )
}




