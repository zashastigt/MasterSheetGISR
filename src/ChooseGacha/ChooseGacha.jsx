import Kafka from '../assets/Character_Kafka_Splash_Art.png';
import Eula from '../assets/Character_Eula_Full_Wish.png';
import './ChooseGacha.css'
import { useState } from 'react'

function ChooseGacha() {
    const [cookie, setCookie] = useState('')
    const [cookieTotal, setCookieTotal] = useState(0)

    const handleChange = (e) => {
        setCookie(e.target.value)
    }

    const handleClick = () => {
        if (cookie.length !== 0) {
            document.cookie = cookie
            setCookieTotal(document.cookie.length)
        }
    }

    if (cookieTotal === 0) {
        return (
            <div className="container">
                <div className="cookie_container">
                    <input className='cookie_text' type="text" onChange={handleChange}/>
                    <button className='cookie_button' onClick={handleClick}>Submit</button>
                </div>
            </div>
        )
    } 
    else {
        return (
            <div className="container">
                <div className="banner_container">
                    <a href="Genshin/">
                        <img className="banner" src={Eula}/>
                    </a>
                    <a href="StarRail/">
                        <img className="banner" src={Kafka}/>
                    </a>
                </div>
            </div>
        )
    }
}

export default ChooseGacha
