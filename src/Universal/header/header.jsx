import React, {useState} from 'react'
import './header.css'
import { useMediaQuery } from 'react-responsive'


export default function Header(props) {
    const [showMenu, setShowMenu] = useState(false)
    const isMobile = useMediaQuery({query: `(max-width: 600px)`})
    console.log(showMenu)

    const Navigation = () => (
        <div className={'navigation'}>
            {props.Links.map(link => (
                <a key={link} className={'link'} href={link[0]}>{link[1]}</a>
            ))}
        </div>
    )

    return (
        <div id={'header'}>
            {isMobile &&
                <>
                    <div className={'mobileHeader'}>
                        <button>{'>'}</button>
                        <button className={'navigationButton'} onClick={() => setShowMenu(!showMenu)}>navigation</button>
                        <button>{'<'}</button>
                    </div>
                    {showMenu && <Navigation />    }
                </>
            }
            {!isMobile && <Navigation />}
        </div>
    )
}