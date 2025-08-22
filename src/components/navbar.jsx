import React from "react";
import { Link } from "react-router";
import "../styling/App.css";
function Navbar(){
    return(
        <div className="site-wrapper">
                <header className="site-container">
                    <div className="site-logo">
                        <Link to='/'>
                      
                        <img src="./public/logo.png" alt="" />
                          </Link>
                    </div>
                    <nav className="site-nav">
                        <ul className="nav-links">
                            <li className="nav-item">
                                <Link className="nav-link" to="/about">Works</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/projects">About me</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/contact">Contact</Link>
                            </li>
                        </ul>
                    </nav>
                </header>
                     </div>
    )
}

export default Navbar;