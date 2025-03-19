//`components/button.jsx`: Será el botón que hará que cambie el estado de `light` a `dark`

import React from "react";
import { useColour } from "../themes/ThemeContext";

const ColourButton = ()=>{
    const {changeColour}= useColour();
    
    return (
        <>
        <div>
            <button value="dark" onClick={changeColour}>Cambiar color</button>
        </div>
        </>
    )
}


export default ColourButton;