import React from 'react'
import ReactDOM from 'react-dom/client'
import { useState, useEffect } from 'react'
import '../../Universal/SearchBar/searchBar.css'
import './GenshinTeams.css'
import {getGICharacterJson} from "../../data/fetchData.js";
import Teams from "../../Universal/Teams/Teams.jsx";


function GenshinTeams() {
    const [genshinCharacters, setGenshinCharacters] = useState({})
    const [loading, setLoading] = useState(true)
    const [searchValue, setSearchValue] = useState('')
    const [filter, setFilter] = useState([])

    useEffect(() => {
        getGICharacterJson().then(async (data) => {
            setGenshinCharacters(data.data.items)
            setLoading(false)
        })
    }, [])

    if (loading) {
        return <div>Loading...</div>
    }


    return (
        <>
           <Teams characters={genshinCharacters} />
        </>
    )
}

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <div className="container">
            <GenshinTeams />
        </div>
    </React.StrictMode>
)