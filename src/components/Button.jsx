//`components/button.jsx`: Será el botón que hará que cambie el estado de `light` a `dark`

import React from "react";
import { useColour } from "../themes/ThemeContext";

const ColourButton = ()=>{
    const {changeColour}= useColour();

const handleChangeColour = (e) =>{
    changeColour(e.target.value);
}

    return (
        <>
        <div>
            <h2>Selecciona el color:</h2>
            <button value="dark" onClick={handleChangeColour}>Cambiar a Dark</button>
            <button value="light" onClick={handleChangeColour}>Cambiar a Light</button>
        </div>
        </>
    )
}


export default ColourButton;