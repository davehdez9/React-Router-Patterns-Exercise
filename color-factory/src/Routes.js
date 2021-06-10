import React, { useState } from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'

import ColorForm from './ColorForm'
import ColorList from './ColorList'
import Color from './Color'

function Routes() {
    const initialColors = {
        red: "#FF0000",
        green: "#00FF00",
        blue: "#0000FF"
    }

    const [ colors, updateColors ] = useState(initialColors)

    function handleNewColor(newColor){
        updateColors(prevColor => ({...prevColor, ...newColor}))
    }

    function renderColor(props){
        const {color} = props.match.params
        const hex = colors[color]
        return <Color {...props} hex={hex} color={color}/>
    }

    return (    
        <BrowserRouter>
            <Switch>
                <Route exact path='/colors'>
                    <ColorList colors={colors}/>
                </Route>
                <Route exact path='/colors/new'>
                    <ColorForm addColor={handleNewColor}/>
                </Route>
                <Route path='/colors/:color' render={renderColor}/>
                <Redirect to="/colors"/>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes
