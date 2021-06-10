import React from 'react'
import { Link, useParams, Redirect } from 'react-router-dom'


function DogDetails({ dogs }) {
    const { name } = useParams()

    if (!name) return <Redirect to="/dogs"/>

    if(name) {
        const current = dogs.find(
            dog => dog.name === name
        )
        return (
            <div>
                <img src={current.src} alt={current.name}/>
                <h2>{current.name}</h2>
                <h2>{current.age} years old</h2>
                <ul>
                    {current.facts.map((fact, i) => (
                        <li key={i}>{fact}</li>
                    ))}
                </ul>
                <Link to="/dogs">Go Back</Link>
            </div>
        )
    }

    return null
}

export default DogDetails

