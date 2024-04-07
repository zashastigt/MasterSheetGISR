import React, {useState} from 'react'
import './header.css'

export default function Header(props) {
    const [showMenu, setShowMenu] = useState(false)

    const Navigation = () => (
        <div className={'navigation'}>
            {props.Links.map(link => (
                <a key={link} className={'link'} href={link[0]}>{link[1]}</a>
            ))}
        </div>
    )

    return (
        <div id={'header'}>
            {props.isMobile &&
                <>
                    <div className={'mobileHeader'}>
                        <button onClick={() => props.setFilterLHidden(!props.filterLHidden)}>{'>'}</button>
                        <button className={'navigationButton'} onClick={() => setShowMenu(!showMenu)}>navigation</button>
                        <button onClick={() => props.setFilterRHidden(!props.filterRHidden)}>{'<'}</button>
                    </div>
                    {showMenu && <Navigation />    }
                </>
            }
            {!props.isMobile && <Navigation />}
        </div>
    )
}