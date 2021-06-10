import React from 'react'
import { Link } from 'react-router-dom'
import "./DogList.css"


function DogList({ dogs }) {
    return (
        <div className="Container">
            <h1>List of Dogs</h1>
            <div className="Card">
                {dogs.map(d => (
                    <div>
                        <img src={d.src} alt={d.name}/>
                        <h3>
                            <Link to={`/dogs/${d.name}`}>{d.name}</Link>
                        </h3>
                    </div>
                ))} 
            </div>
        </div>
    )
}

export default DogList
