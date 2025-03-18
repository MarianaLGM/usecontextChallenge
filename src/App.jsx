//`App`: Es el inicio de nuestra aplicación y donde habrá que usar el `ThemeProvider` y las `rutas`
import RoutesApp from "./Routes/RoutesApp"
import { ColourProvider, useColour } from './themes/ThemeContext';
import ColourButton from "./components/Button";
import './App.css';

const App = () => { //se envuelve todo en el colourProvider

  const colour = useColour();  // Usamos el color del contexto
  
    // Verificamos si el color es 'light' o 'dark' y asignamos la clase que le correspond
    const appClasses = colour === "light" ? "light" : "dark";  

  return (
  
    <ColourProvider >
      <div className={appClasses}>
        <RoutesApp />
        <ColourButton />
      </div>
    </ColourProvider>

  );
};


export default App;



