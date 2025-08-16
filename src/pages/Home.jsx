import React from 'react';
import { Link } from 'react-router';

function Home(){
    return(
    <div>
        <h1>Welcome to My Portfolio</h1>
        <Link to= "/projects"><button>View projects </button></Link>
    </div>
)}

export default Home;