import React from 'react'
import {Link} from 'react-router-dom'

function Color({ hex, color, history }) {
    console.log(history)
    if(!hex){
        history.push("/colors")
    }

    return (
        <div style={{ backgroundColor: hex }}>
            <p>This is {color}</p>
            <p>
                <Link to="/colors">Go Back</Link>
            </p>
            
        </div>
    )
}

export default Color
