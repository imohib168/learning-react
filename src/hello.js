import React from 'react'
import './hello.css'


function Hello({dishName1, dishName2, dishName3, dishName4}) {
    return(
    // <div>Hello World from {fileName} </div>
    <ol className="menuItems">
        <h1>Dishes that we serve</h1>
        <li> {dishName1} </li>
        <li> {dishName2} </li>
        <li> {dishName3} </li>
        <li> {dishName4} </li>
    </ol>
    )
}

export default Hello;