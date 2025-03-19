//`App`: Es el inicio de nuestra aplicación y donde habrá que usar el `ThemeProvider` y las `rutas`
import RoutesApp from "./Routes/RoutesApp"
import { ColourProvider, useColour } from './themes/ThemeContext';
import ColourButton from "./components/Button";
import './App.css';

const App = () => { //se envuelve todo en el colourProvider

  return (
  
    <ColourProvider >
        <RoutesApp />
        <ColourButton />
    </ColourProvider>

  );
};


export default App;



