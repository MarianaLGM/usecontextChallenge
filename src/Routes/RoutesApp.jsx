
import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';

/*Navigate: Este componente permite realizar una redirección a otra ruta. La ruta /home redirige automáticamente a la ruta /,
lo cual es útil cuando NO queremos que los usuarios accedan a una ruta específica y prefieres redirigirlos a otra página.*/

// importamos componentes
import Home from '../pages/Home';
import MyJob from '../pages/MyJob';
import Profile from '../pages/Profile';

function RoutesApp (){
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/home" element={<Navigate to="/" />} />
                <Route path="/myjob" element={<MyJob/>}/>
                <Route path="/profile"element={<Profile/>}/>
            </Routes>
        </Router>
    );
}



export default RoutesApp;