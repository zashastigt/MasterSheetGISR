import React, {useEffect, useState} from 'react'
import ReactDOM from 'react-dom/client'
import '../../Universal/SearchBar/searchBar.css'
import './GenshinTeams.css'
import {getGICharacterJson} from "../../data/fetchData.js";
import Teams from "../../Universal/Teams/Teams.jsx";
import Header from "../../Universal/header/header.jsx";


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

    const filterCharacters = (characterstoFilter) => {
        return Object.keys(genshinCharacters).reduce((result, key) => {
            if (!characterstoFilter.includes(key)) {
                result[key] = genshinCharacters[key];
            }
            return result;
        }, {})
    }

    return (
        <>
           <Teams characters={() => filterCharacters(
               [
                   '10000005-anemo',
                   '10000005-dendro',
                   '10000005-electro',
                   '10000005-geo',
                   '10000005-hydro']
           )} />
        </>
    )
}

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <div className="container">
            <Header Links={[['../../StarRail/', 'Star Rail'], ['../../Genshin/', 'Genshin Impact'], ['../Genshin/Teams/', 'Genshin Teams']]}/>
            <GenshinTeams />
        </div>
    </React.StrictMode>
)