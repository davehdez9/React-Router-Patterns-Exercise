import React from 'react'
import { NavLink } from 'react-router-dom'
import "./Nav.css"

function Nav({dogs}) {
    const names = dogs.map(dog => (
        <NavLink to={`/dogs/${dog.name}`}>{dog.name}</NavLink>
    ))
    return (
        <div>
           <nav className='Nav'>
                <NavLink exact to='/dogs'>Home</NavLink>
                {names}
           </nav>
        </div>
    )
}

export default Nav
