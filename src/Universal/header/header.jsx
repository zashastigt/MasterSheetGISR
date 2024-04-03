import React from 'react'
import './header.css'


export default function Header(props) {
    return (
        <div id={'header'}>
            {props.Links.map(link => (
                <a className={'link'} href={link[0]}>
                    <p>{link[1]}</p>
                </a>
            ))}

        </div>
    )
}