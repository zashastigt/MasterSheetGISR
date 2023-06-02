import Kafka from '../assets/Character_Kafka_Splash_Art.png';
import Eula from '../assets/Character_Eula_Full_Wish.png';
import './ChooseGacha.css'

function ChooseGacha() {

    return (
        <body>
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
        </body>
    )
}

export default ChooseGacha
