import React, {useEffect, useState} from "react";
import './pityBox.css'
import postData from "../../data/postData.js";
import {getSheetDataJson} from "../../data/fetchData.js";

export default function PityBox({game}) {
    const [pities, setPities] = useState([])
    const [selectedPerson, setSelectedPerson] = useState({})
    const [regular4Pity, setRegular4Pity] = useState(0)
    const [weapon4Pity, setWeapon4Pity] = useState(0)
    const [character4Pity, setCharacter4Pity] = useState(0)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        getSheetDataJson().then(data => {
            if (game === 'StarRail') {
                setPities(data.SRPity)
            } else if (game === 'Genshin') {
                setPities(data.GIPity)
            }
            setLoading(false)
        })
    }, [])

    useEffect(() => {
       transferPity()
    }, [selectedPerson, regular4Pity, weapon4Pity, character4Pity])


    if (loading) {
        return <div>Loading...</div>
    }

    function addPity(who, what) {
        switch (what) {
            case 'Regular':
                setRegular4Pity(regular4Pity + 1)
                break
            case 'Weapon':
                setWeapon4Pity(weapon4Pity + 1)
                break
            case 'Character':
                setCharacter4Pity(character4Pity + 1)
                break
        }

        setSelectedPerson({...selectedPerson, [what]: selectedPerson[what] + 1})
    }

    function resetPity(who, what, star) {
        if (star === 5){
            switch (what) {
                case 'Regular':
                    setRegular4Pity(0)
                    setSelectedPerson({...selectedPerson, [what]: 0})
                    break
                case 'Weapon':
                    setWeapon4Pity(0)
                    setSelectedPerson({...selectedPerson, [what]: 0})
                    break
                case 'Character':
                    setCharacter4Pity(0)
                    setSelectedPerson({...selectedPerson, [what]: 0})
                    break
            }
        } else if(star === 4) {
            switch (what) {
                case 'Regular':
                    setRegular4Pity(0)
                    break
                case 'Weapon':
                    setWeapon4Pity(0)
                    break
                case 'Character':
                    setCharacter4Pity(0)
                    break
            }
        }
    }

    function transferPity() {
        const newPity = pities.map(pity => {
            if (selectedPerson.Name === pity.Name) {
                return selectedPerson
            } else {
                return pity
            }
        })
        setPities(newPity)
        console.log(selectedPerson)
        postData({...selectedPerson, Pity: game, Character4: character4Pity, Weapon4: weapon4Pity, Regular4: regular4Pity})
    }

    function Pity({pity}) {

        return (
        <div className={'pityInfo'} onClick={() => setSelectedPerson(pity)}>
            <div className={'pityName'}>{pity.Name}</div>
            <div className={'pityPity'}>
                <div className={'pityColumn'}>
                    <div className={'pityBarColor pity5Color'}></div>
                    <div>{pity.Regular}</div>
                    <div>{pity.Weapon}</div>
                    <div>{pity.Character}</div>
                    <div>{pity.Guarantee}</div>
                </div>
                <div className={'pityColumn'}>
                    <div className={'pityBarColor pity4Color'}></div>
                    <div>{regular4Pity}</div>
                    <div>{weapon4Pity}</div>
                    <div>{character4Pity}</div>
                </div>
            </div>
        </div>
        )
    }

    function PityInput() {
        return (
            <div className={'pityInput'}>
                <div>
                    <div>{selectedPerson.Name}</div>
                    <div className={'star5'}>5 Star</div>
                    <div className={'star4'}>4 Star</div>
                </div>
                <div className={'pityInputRow'}>
                    <div className={'pityInputCell'}>
                        <div>Normal</div>
                        <div className={'star5'}>{selectedPerson.Regular}</div>
                        <div className={'star4'}>{regular4Pity}</div>
                        <button className={'button'} onClick={() => addPity(selectedPerson.Name, 'Regular')}>+1</button>
                        <div>
                            <button className={'reset star4'} onClick={() => resetPity(selectedPerson.Name, 'Regular', 4)}>4<img alt={'reset'} src={'/assets/reset.png'}></img></button>
                            <button className={'reset star5'} onClick={() => resetPity(selectedPerson.Name, 'Regular', 5)}>5<img alt={'reset'} src={'/assets/reset.png'}></img></button>
                        </div>

                    </div>
                    <div className={'pityInputCell'}>
                        <div>Weapon</div>
                        <div className={'star5'}>{selectedPerson.Weapon}</div>
                        <div className={'star4'}>{weapon4Pity}</div>
                        <button className={'button'} onClick={() => addPity(selectedPerson.Name, 'Weapon')}>+1</button>
                        <div>
                            <button className={'reset star4'} onClick={() => resetPity(selectedPerson.Name, 'Weapon', 4)}>4<img alt={'reset'} src={'/assets/reset.png'}></img></button>
                            <button className={'reset star5'} onClick={() => resetPity(selectedPerson.Name, 'Weapon', 5)}>5<img alt={'reset'} src={'/assets/reset.png'}></img></button>
                        </div>
                    </div>
                    <div className={'pityInputCell'}>
                        <div>Character</div>
                        <div className={'star5'}>{selectedPerson.Character}</div>
                        <div className={'star4'}>{character4Pity}</div>
                        <button className={'button'} onClick={() => addPity(selectedPerson.Name, 'Character')}>+1</button>
                        <div>
                            <button className={'reset star4'} onClick={() => resetPity(selectedPerson.Name, 'Character', 4)}>4<img alt={'reset'} src={'/assets/reset.png'}></img></button>
                            <button className={'reset star5'} onClick={() => resetPity(selectedPerson.Name, 'Character', 5)}>5<img alt={'reset'} src={'/assets/reset.png'}></img></button>
                        </div>
                    </div>
                    <div className={'pityInputCell'}>
                        <div>50/50</div>
                        <div className={'star5'} onClick={() => {
                            if (selectedPerson.Guarantee === 'No'){
                                setSelectedPerson({...selectedPerson, Guarantee: 'Yes'})
                            } else if(selectedPerson.Guarantee === 'Yes') {
                                setSelectedPerson({...selectedPerson, Guarantee: 'No'})
                            }
                        }}>{selectedPerson.Guarantee}</div>
                    </div>
                </div>

                <button className={'close button'} onClick={() => {
                    setSelectedPerson({})
                }}>X</button>
            </div>
        )
    }

    return (
        <div className={'pityBox'}>

            <div className={'pityContainer'}>

                {Object.keys(selectedPerson).length === 0 ?
                    <>
                        <div className={'pityInputCell'}>
                            <div>Who</div>
                            <div className={'pityBarColor pityNoColor'}></div>
                            <div>Normal</div>
                            <div>Weapon</div>
                            <div>Event</div>
                            <div>50/50</div>
                        </div>
                        {pities.map((pity, index) => {
                            return <Pity key={index} pity={pity}/>
                        })}
                    </>

                    :
                    <PityInput />
                }

            </div>
            <div className={'pityBoxName'}>Pity</div>
        </div>
    )
}