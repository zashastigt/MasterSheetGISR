import React from 'react'
import ReactDOM from 'react-dom/client'
import {getGICharacterStatJson} from "../../data/fetchData.js";

async function GenshinStatTable() {
    await getGICharacterStatJson().then(function (data) {
    })
    return (
        <>
            <h1>Test</h1>
        </>
    )
}



ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <div className="container">
            <GenshinStatTable />
        </div>
    </React.StrictMode>
)