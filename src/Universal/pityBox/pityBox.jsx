import React, {useState} from "react";
import './pityBox.css'

export default function PityBox() {
    const testPity = [
        {
            Name: 'Zasha',
            Regular: 51,
            Weapon: 0,
            Character: 75,
            Guarantee: true
        },
        {
            Name: 'Wilco',
            Regular: 51,
            Weapon: 0,
            Character: 14,
            Guarantee: false
        },
        {
            Name: 'Wilfred',
            Regular: 50,
            Weapon: 0,
            Character: 69,
            Guarantee: true
        },
        {
            Name: 'Rick',
            Regular: 0,
            Weapon: 0,
            Character: 0,
            Guarantee: false
        }
    ]


    function Pity({pity}) {
        const [regular4Pity, setRegular4Pity] = useState(0)
        const [weapon4Pity, setWeapon4Pity] = useState(0)
        const [character4Pity, setCharacter4Pity] = useState(0)

        return (
        <div className={'pityInfo'}>
            <div className={'pityName'}>{pity.Name}</div>
            <div className={'pityPity'}>
                <div className={'pityColumn'}>
                    <div className={'pityBarColor pity5Color'}></div>
                    <div>{pity.Regular}<button className={'pityButton'}>R</button></div>
                    <div>{pity.Weapon}<button className={'pityButton'}>R</button></div>
                    <div>{pity.Character}<button className={'pityButton'}>R</button></div>
                    <div>{pity.Guarantee ? 'yes' : 'no'}</div>
                </div>
                <div className={'pityColumn'}>
                    <div className={'pityBarColor pity4Color'}></div>
                    <div>{regular4Pity}<button className={'pityButton'}>R</button></div>
                    <div>{weapon4Pity}<button className={'pityButton'}>R</button></div>
                    <div>{character4Pity}<button className={'pityButton'}>R</button></div>
                </div>
                <div className={'pityColumn'}>
                    <div className={'pityBarColor pityAColor'}></div>
                    <div>
                        <button className={'pityButton'}>+</button>
                    </div>
                    <div>
                        <button className={'pityButton'}>+</button>
                    </div>
                    <div>
                        <button className={'pityButton'}>+</button>
                    </div>
                    <div>
                        <button className={'pityButton'}>S</button>
                    </div>
                </div>
            </div>
        </div>
        )
    }

    return (
        <div className={'pityBox'}>
            <div className={'pityContainer'}>
                <div className={'pityColumn'}>
                    <div>Which</div>
                    <div className={'pityBarColor pityNoColor'}></div>
                    <div>Normal</div>
                    <div>Weapon</div>
                    <div>Event</div>
                    <div>50/50</div>
                </div>
                {testPity.map(pity => {
                    return <Pity pity={pity} />
                })}

            </div>
            <div className={'pityBoxName'}>Pity</div>
        </div>
    )
}