//`components/button.jsx`: Será el botón que hará que cambie el estado de `light` a `dark`

import React from "react";
import { useColour } from "../themes/ThemeContext";

const ColourButton = ()=>{
    const {changeColour}= useColour();

const handleChangeColour = (newColour) =>{
    changeColour(newColour)
}

    return (
        <>
        <div>
            <h2>Selecciona el color:</h2>
            <button onClick={() => handleChangeColour("dark")}>Cambiar a Dark</button>
            <button onClick={() => handleChangeColour("light")}>Cambiar a Light</button>
        </div>
        </>
    )
}


export default ColourButton;