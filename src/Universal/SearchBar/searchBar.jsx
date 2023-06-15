
import { useState, useEffect } from 'react'

export default function SearchBar({searchValue, setSearchValue}) {
    const [searchVisibility, setSearchVisibility] = useState(false)


    useEffect(() => {
        document.onkeydown = function (e) {
            if (e.key.length === 1 && !e.metaKey && !e.ctrlKey && !e.altKey) setSearchVisibility(true);
        };
    });

    useEffect(() => {
        if (searchValue === '') {
            setSearchVisibility(false);
        }
    }, [searchValue]);

    return (
        <>
            {searchVisibility && <input className="search" type="text" autoFocus value={searchValue} onChange={e => setSearchValue(e.target.value)} />}
        </>
    )
}