import React, {useState} from "react";
import './pityBox.css'

export default function PityBox() {

    const testPity = [
        {
            Name: 'Zasha',
            Regular: 51,
            Weapon: 0,
            Character: 75,
            Guarantee: 'Yes'
        },
        {
            Name: 'Wilco',
            Regular: 51,
            Weapon: 0,
            Character: 14,
            Guarantee: 'No'
        },
        {
            Name: 'Wilfred',
            Regular: 50,
            Weapon: 0,
            Character: 69,
            Guarantee: 'Yes'
        },
        {
            Name: 'Rick',
            Regular: 0,
            Weapon: 0,
            Character: 0,
            Guarantee: 'No'
        }
    ]

    const [pities, setpities] = useState(testPity)
    const [selectedPerson, setSelectedPerson] = useState('')
    const [regular4Pity, setRegular4Pity] = useState(0)
    const [weapon4Pity, setWeapon4Pity] = useState(0)
    const [character4Pity, setCharacter4Pity] = useState(0)

    console.log(pities)

    function addPity(who, what) {
        pities.map(pity => {
            if (who === pity.Name) {
                console.log(what)

            } else {
                console.log('no')
            }
        })
    }

    function resetPity({who, what}) {

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
                    <div>{pity.Guarantee ? 'yes' : 'no'}</div>
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
                        <button className={'button'} onClick={() => addPity(selectedPerson.Name, selectedPerson.Regular)}>+1</button>
                        <div>
                            <button className={'reset star4'}>4<img alt={'reset'} src={'/assets/reset.png'}></img></button>
                            <button className={'reset star5'}>5<img alt={'reset'} src={'/assets/reset.png'}></img></button>
                        </div>

                    </div>
                    <div className={'pityInputCell'}>
                        <div>Weapon</div>
                        <div className={'star5'}>{selectedPerson.Weapon}</div>
                        <div className={'star4'}>{weapon4Pity}</div>
                        <button className={'button'}>+1</button>
                        <div>
                            <button className={'reset star4'}>4<img alt={'reset'} src={'/assets/reset.png'}></img></button>
                            <button className={'reset star5'}>5<img alt={'reset'} src={'/assets/reset.png'}></img></button>
                        </div>
                    </div>
                    <div className={'pityInputCell'}>
                        <div>Character</div>
                        <div className={'star5'}>{selectedPerson.Character}</div>
                        <div className={'star4'}>{character4Pity}</div>
                        <button className={'button'}>+1</button>
                        <div>
                            <button className={'reset star4'}>4<img alt={'reset'} src={'/assets/reset.png'}></img></button>
                            <button className={'reset star5'}>5<img alt={'reset'} src={'/assets/reset.png'}></img></button>
                        </div>
                    </div>
                    <div className={'pityInputCell'}>
                        <div>50/50</div>
                        <div className={'star5'}>{selectedPerson.Guarantee}</div>
                    </div>
                </div>

                <button className={'close button'} onClick={() => setSelectedPerson('')}>X</button>
            </div>
        )
    }

    return (
        <div className={'pityBox'}>

            <div className={'pityContainer'}>

                {selectedPerson === '' ?
                    <>
                        <div className={'pityInputCell'}>
                            <div>Who</div>
                            <div className={'pityBarColor pityNoColor'}></div>
                            <div>Normal</div>
                            <div>Weapon</div>
                            <div>Event</div>
                            <div>50/50</div>
                        </div>
                        {pities.map(pity => {
                            return <Pity pity={pity}/>
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