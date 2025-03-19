// `themes/themeContext`: Aquí estará nuestro contexto y donde haremos los cambios de estado. Debemos comenzar con un estado de `light` que al pulsar cambiará a `dark`.
//  Al hacerlo hay unas clases creadas en `index.css` donde puedes ver lo que hace.

import {createContext, useContext, useState} from "react";

const ColourContext = createContext()//aqui renombramos a createContext para poder acceder a él.

export const ColourProvider=({children})=>{ // todo lo que esté en provider le vas a pasar el contexto para poder utlizar
    const [colour, setColour]= useState ("light")

    //FUNCION PARA EL CAMBIO DE COLOR
    const changeColour= ()=>{ //changeColour hace de interruptor para cambiar a dark o ligth
        setColour(newColour =>newColour ===colour === "light" ? "light" : "dark")
    };

    return (
    <ColourContext.Provider value={{colour, changeColour}}>
        {children}
    </ColourContext.Provider>
    )
}
//value={{colour, changeColour}} le pasamos esa info para poder usarla luego el color para saber si es dark o light y el 
//changeColor para hacer que cambie va en doble llave porque hace destructuring
//exportamos el hook para utilizar el contexto
export const useColour= ()=> {
    return useContext(ColourContext)
}

export default ColourProvider







