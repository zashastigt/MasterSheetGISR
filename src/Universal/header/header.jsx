import React from 'react'
import './header.css'


export default function Header(props) {
    return (
        <div id={'header'}>
            {props.Links.map(link => (
                <a key={link} className={'link'} href={link[0]}>{link[1]}</a>
            ))}

        </div>
    )
}