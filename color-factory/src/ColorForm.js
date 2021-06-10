import React, {useState} from 'react'
import { useHistory } from 'react-router-dom'

function ColorForm({addColor}) {
    const [form, updateForm] = useState({name: "", hex:"#ffffff"})
    const history = useHistory()


    function handleChange(e){
        e.persist()
        updateForm(f => ({ ...f, [e.target.name]: e.target.value }))
    }

    function handleSubmit(e){
        e.preventDefault()
        addColor({ [form.name]: form.hex })
        history.push("/colors")
    }

    const {hex, name} = form

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Color Name</label>
                <input 
                    name="name"
                    id="name"
                    placeholder="Enter Color name"
                    onChange={handleChange}
                    value={name}
                />
                <label htmlFor="hex">Color Value</label>
                <input 
                    type='color'
                    name="color"
                    id="hex"
                    onChange={handleChange}
                    value={hex}
                />
                <input type="submit" value="Add this color" />

            </form>
        </div>
    )
}

export default ColorForm
