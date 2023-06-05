import React from 'react'
import { useState, useEffect } from 'react'
import ReactDOM from 'react-dom/client'
import './StarRailPage.css'

const MastersheetData = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch(`https://sheets.googleapis.com/v4/spreadsheets/17LbbqsemrAKyXvfnGdZM2Aox32umyBAFhWvUwzK_Cw4?key=${import.meta.env.VITE_GOOGLE_API_KEY}`)
            .then((res) => res.json())
            .then((data) => setData(data));
    }, []);

    return (
        <>
            {data &&
                data.map((item) => {
                    return <p key={item.id}>{item.title}</p>;
                })}
        </>
    );
};


ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <MastersheetData />
     </React.StrictMode>
)
/*
    < div className = "container" >
                <input className="search" />
                <div className="filters_container">
                    <div id="elementFilter" className="filters">
                    {MastersheetData()}
                    </div>
                    <div className="filters">

                    </div>
                </div>
                <div className="character_list">
                </div>
            </div >
            */
