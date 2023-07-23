import Kafka from '../assets/Character_Kafka_Splash_Art.png';
import Eula from '../assets/Character_Eula_Full_Wish.png';
import './ChooseGacha.css'
import { useEffect, useState } from 'react'

function ChooseGacha() {
    const [storageKey, setStorageKey] = useState('')
    let key = ''

    const handleChange = (e) => {
        key = e.target.value
    }

    const handleClick = () => {
        if (key.length !== 0) {
            localStorage.setItem('Key', key)
            setStorageKey(key)
        }
    }
    
    useEffect(() => {
        setStorageKey(localStorage.getItem('Key'))
    }, []);
    
    if (storageKey === null) {
        return (
            <div className="container">
                <div className="storage_container">
                    <input className="storage_text" type="text" onChange={handleChange}/>
                    <button className="storage_button" onClick={handleClick}>Submit</button>
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
