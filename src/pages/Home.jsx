import React from 'react';
import { Link } from 'react-router';
import "../styling/App.css";

function Home(){
    return(  
    <nav className="navbar">
        <ul className="links">
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/about">About</Link>
            </li>
            <li>
                <Link to="/projects">Projects</Link>
            </li>
            <li>
                <Link to="/contact">Contact</Link>
            </li>
        </ul>
        
    </nav>
    
)}

export default Home;