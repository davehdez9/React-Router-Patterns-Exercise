import React from 'react'
import { Link } from 'react-router-dom'

function ColorList({colors}) {
    const colorLinks = Object.keys(colors).map(name => (
        <li key={name}>
            <Link to={`/colors/${name}`}>{name}</Link>
        </li>
    ))
    return (
        <div>
            <h1>Welcome to the color factory.</h1>
            <h1>
                <Link to="/colors/new">Add new color</Link>
            </h1>
            <p>Please select a color.</p>
            <ul>{colorLinks}</ul>
        </div>
    )
}

export default ColorList
