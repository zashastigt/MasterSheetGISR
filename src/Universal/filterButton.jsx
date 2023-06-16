import CharacterBox from '../Universal/characterBox/characterBox.jsx'
import WeaponBox from '../Universal/weaponBox/weaponBox.jsx'
import { useState, useEffect } from 'react'

function GetFilterButton(listShown, filter, {setFilter}, key, label, url){
    const [cbChecked, setChecked] = useState(false)
    
    const handleChange = (event) => {
        setChecked(event.target.checked)
        event.target.checked ? setFilter([...filter, label]) :  setFilter(filter.filter(item => !item.includes(label)))
      }

      useEffect(() => {
        setChecked(false)
        setFilter([])
      }, [listShown])
      
    return (
        <label key={key}>
            <input type="checkbox" value={key} onChange={handleChange} checked={cbChecked} />
            <img alt={label} className="element" src={url} />
            <span>{label}</span>
        </label>
    )
}

export function Filtering(types, game, searchValue, filter, boxType) {

    if (boxType === 'Character') {
        return FilterCheckboxes(types, filter).filter(fsb => fsb.Name.toLowerCase().includes(searchValue.toLowerCase())).map(character => {
            return <CharacterBox key={character.Name} gameCharacter={character} game={game} />
        })
    }
    else if (boxType === 'Weapon') {
        return FilterCheckboxes(types, filter).filter(filter => filter.Name.toLowerCase().includes(searchValue.toLowerCase())).map(weapon => {
            return <WeaponBox key={weapon.Name} gameWeapon={weapon} game={game} />
        })
    }
    
}

function FilterCheckboxes(types, filter) {
    if (filter.length !== 0 ) {
        const element = types.filter(fil => fil.Element !== undefined && filter.some(f => fil.Element.toLowerCase().includes(f.toLowerCase())))
        const group = types.filter(fil => fil.Group !== undefined && filter.some(f => fil.Group.toLowerCase().includes(f.toLowerCase())))
        
        if (element.length !== 0 && group.length !== 0) return element.filter(fil => group.some(f => fil.Name.includes(f.Name)))
        else if (element.length !== 0 ) return element
        else if (group.length !== 0) return group
    }

    return types
}

export default function Filters({filter, setFilter, listShown, element, elementImgs, elementExt, group, groupImgs, groupExt}) {
    return (
        <div className="filters">
            <ul className={`elements ${listShown ? '' : 'elementsHidden'}`}>
                {Object.keys(element).map((k)=>GetFilterButton(listShown, filter, setFilter[k]={setFilter}, k, element[k].label, `../assets/${elementImgs}/${element[k].urlKey}.${elementExt}`))}
            </ul>
            <ul className="weapons">
                {Object.keys(group).map((k)=>GetFilterButton(listShown, filter, setFilter[k]={setFilter}, k, group[k].label, `../assets/${groupImgs}/${group[k].urlKey}.${groupExt}`))}
            </ul>
        </div>
    )
}