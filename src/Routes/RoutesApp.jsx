
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';

// importamos componentes
import Home from '../pages/Home';
import MyJob from '../pages/MyJob';
import Profile from '../pages/Profile';
import { useColour} from "../themes/ThemeContext";

function RoutesApp (){
    const {colour}=useColour()
    return (
        <Router>
            <section className={`App ${colour}`}>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/myjob">My Job</Link>
                <Link to="/profile">Profile</Link>
            </nav>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/myjob" element={<MyJob/>}/>
                <Route path="/profile"element={<Profile/>}/>
            </Routes>
            </section>
        </Router>
    );
}

export default RoutesApp;

