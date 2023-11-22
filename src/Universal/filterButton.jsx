import CharacterBox from '../Universal/characterBox/characterBox.jsx'
import WeaponBox from '../Universal/weaponBox/weaponBox.jsx'
import CharacterPortraitBox from '../Universal/characterPortraitBox/characterPortraitBox.jsx'
import { useState, useEffect } from 'react'

function GetFilterButton(listShown, filter, {setFilter}, key, label, url){
    const [cbChecked, setChecked] = useState(false)
    const [opaque, setOpaque] = useState('')
    
    const handleChange = (event) => {
        setChecked(event.target.checked)
        if (event.target.checked) {
            setFilter([...filter, label])
            setOpaque('opaque')
        }
        else {
            setFilter(filter.filter(item => !item.includes(label)))
            setOpaque('')
        }
      }

      useEffect(() => {
        setChecked(false)
        setFilter([])
        setOpaque('')
      }, [listShown])
      
    return (
        <label key={key}>
            <input type="checkbox" value={key} onChange={handleChange} checked={cbChecked} />
            <img alt={label} className={`element ${opaque}`} src={url} />
            <span>{label}</span>
        </label>
    )
}

export function Filtering(params) {
    if (params.isChar) {
        return FilterCheckboxes(params.itemList, params.filter).filter(filter =>
            filter.name.toLowerCase().includes(params.searchValue.toLowerCase())).map(character => {
                if (!params.portraitOnly)
                    return <CharacterBox
                        key={character.id}
                        gameCharacter={character}
                        game={params.game}
                        characterList={params.itemList}
                        setCharacterList={params.setCurrentList}
                    />
                return <CharacterPortraitBox
                    key={character.id}
                    character={character}
                    characterList={params.currentList}
                    setCharacterList={params.setCurrentList}
                    addCharacter={params.addItem}
                    setAddCharacter={params.setAddItem}
                    setCharData={params.onClick}
                />
        })
    }
    else {
        return FilterCheckboxes(params.itemList, params.filter).filter(filter => filter.name.toLowerCase().includes(params.searchValue.toLowerCase())).map(weapon => {
            return <WeaponBox key={weapon.name} gameWeapon={weapon} game={params.game} weaponList={params.itemList} setWeaponList={params.setCurrentList} />
        })
    }   
}

function FilterCheckboxes(itemList, filter) {
    if (filter.length !== 0 ) {
        const element = itemList.filter(fil => fil.types.combatType !== undefined && filter.some(f => fil.types.combatType.Element.toLowerCase().includes(f.toLowerCase())))
        const group = itemList.filter(fil => fil.types.pathType !== undefined && filter.some(f => fil.types.pathType.Group.toLowerCase().includes(f.toLowerCase())))

        if (element.length !== 0 && group.length !== 0) return element.filter(fil => group.some(f => fil.name.includes(f.name)))
        return [...element, ...group]
        
    }

    return itemList
}

export default function Filters({filter, setFilter, listShown, element, elementImgs, elementExt, group, groupImgs, groupExt, hideEverything = false}) {
    return (
        <div className="filters">
            <ul className={`elements ${!listShown || hideEverything ? 'elementsHidden' : ''}`}>
                {Object.keys(element).map((k)=>GetFilterButton(listShown, filter, setFilter[k]={setFilter}, k, element[k].label,  new URL(`../assets/${elementImgs}/${element[k].urlKey}.${elementExt}`, import.meta.url).href))}
            </ul>
            <ul className={`weapons ${hideEverything ? 'elementsHidden' : ''}`}>
                {Object.keys(group).map((k)=>GetFilterButton(listShown, filter, setFilter[k]={setFilter}, k, group[k].label, new URL(`../assets/${groupImgs}/${group[k].urlKey}.${groupExt}`, import.meta.url).href))}
            </ul>
        </div>
    )
}