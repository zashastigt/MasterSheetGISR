import React, {useEffect, useState} from "react";
import './pityBox.css'
import postData from "../../data/postData.js";

export default function PityBox({game, pities, setPities}) {
    const [selectedPerson, setSelectedPerson] = useState({})

    useEffect(() => {
        if (selectedPerson.Name === 'Zasha' || selectedPerson.Name === 'Wilco' || selectedPerson.Name === 'Wilfred' || selectedPerson.Name === 'Rick') {
            transferPity()
        }
    }, [selectedPerson])

    function addPity(what) {
        setSelectedPerson({...selectedPerson, [what]: selectedPerson[what] + 1, [what+4]: selectedPerson[what+4] + 1})
    }

    function resetPity(what, star) {
        if (star === 5){
            switch (what) {
                case 'Regular':
                    setSelectedPerson({...selectedPerson, [what]: 0, [what+4]: 0})
                    break
                case 'Weapon':
                    setSelectedPerson({...selectedPerson, [what]: 0, [what+4]: 0})
                    break
                case 'Character':
                    setSelectedPerson({...selectedPerson, [what]: 0, [what+4]: 0})
                    break
            }
        } else if(star === 4) {
            switch (what) {
                case 'Regular':
                    setSelectedPerson({...selectedPerson, [what+4]: 0})
                    break
                case 'Weapon':
                    setSelectedPerson({...selectedPerson, [what+4]: 0})
                    break
                case 'Character':
                    setSelectedPerson({...selectedPerson, [what+4]: 0})
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
        postData({...selectedPerson, Pity: game})
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
                    <div>{pity.Regular4}</div>
                    <div>{pity.Weapon4}</div>
                    <div>{pity.Character4}</div>
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
                        <div className={'star4'}>{selectedPerson.Regular4}</div>
                        <button className={'button'} onClick={() => addPity('Regular')}>+1</button>
                        <div>
                            <button className={'reset star4'} onClick={() => resetPity('Regular', 4)}>4<img alt={'reset'} src={'/assets/reset.png'}></img></button>
                            <button className={'reset star5'} onClick={() => resetPity('Regular', 5)}>5<img alt={'reset'} src={'/assets/reset.png'}></img></button>
                        </div>

                    </div>
                    <div className={'pityInputCell'}>
                        <div>Weapon</div>
                        <div className={'star5'}>{selectedPerson.Weapon}</div>
                        <div className={'star4'}>{selectedPerson.Weapon4}</div>
                        <button className={'button'} onClick={() => addPity('Weapon')}>+1</button>
                        <div>
                            <button className={'reset star4'} onClick={() => resetPity('Weapon', 4)}>4<img alt={'reset'} src={'/assets/reset.png'}></img></button>
                            <button className={'reset star5'} onClick={() => resetPity('Weapon', 5)}>5<img alt={'reset'} src={'/assets/reset.png'}></img></button>
                        </div>
                    </div>
                    <div className={'pityInputCell'}>
                        <div>Character</div>
                        <div className={'star5'}>{selectedPerson.Character}</div>
                        <div className={'star4'}>{selectedPerson.Character4}</div>
                        <button className={'button'} onClick={() => addPity('Character')}>+1</button>
                        <div>
                            <button className={'reset star4'} onClick={() => resetPity('Character', 4)}>4<img alt={'reset'} src={'/assets/reset.png'}></img></button>
                            <button className={'reset star5'} onClick={() => resetPity('Character', 5)}>5<img alt={'reset'} src={'/assets/reset.png'}></img></button>
                        </div>
                    </div>
                    <div className={'pityInputCell'}>
                        <div>50/50</div>
                        <div className={'star5'} onClick={() => {
                            console.log(selectedPerson.Guarantee)
                            if (selectedPerson.Guarantee === 'No'){
                                console.log(1)
                                setSelectedPerson({...selectedPerson, Guarantee: 'Yes'})
                            } else if(selectedPerson.Guarantee === 'Yes') {
                                console.log(2)
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