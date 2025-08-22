import React from "react";
import { Link } from "react-router";
import "../styling/App.css";
function Navbar(){
    return(
                <header className="site-header">
                    <div className="site-logo">
                        <img src="../assets/logo.png" alt="" />
                    </div>
                    <nav className="site-nav">
                        <ul className="nav-links">
                            <li className="nav-item">
                                <Link className="nav-link" to="/about">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/projects">Projects</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/contact">Contact</Link>
                            </li>
                        </ul>
                    </nav>
                </header>
    )
}

export default Navbar;