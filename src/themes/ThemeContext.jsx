// `themes/themeContext`: Aquí estará nuestro contexto y donde haremos los cambios de estado. Debemos comenzar con un estado de `light` que al pulsar cambiará a `dark`.
//  Al hacerlo hay unas clases creadas en `index.css` donde puedes ver lo que hace.

import {createContext, useContext, useState} from "react";

const ColourContext = createContext()

export const ColourProvider=({children})=>{ // todo lo que esté en provider le vas a pasar el contexto para poder utlizar
    const [colour, setColour]= useState ("light")//inglés
    const changeColour= (newColour)=>{
        setColour(newColour)
    };

    return (
    <ColourContext.Provider value={{colour, changeColour}}>
        {children}
    </ColourContext.Provider>
    )
}
//exportamos el hook para utilizar el contexto
export const useColour= ()=> {
    return useContext(ColourContext)
}




