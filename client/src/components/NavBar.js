import React from "react";

import { Route, Link } from 'react-router-dom';


function NavBar(){
    return(
        <header className = "HeaderStyle">       
    
        
        <Link to="/"> Home</Link>   
        <Link to="/Music"> Music</Link>  
        <Link to="/Members"> Members</Link>
        <Link to="/Contact"> Contact</Link>
        <Link to="/Donate"> Donate</Link>
        <Link to="/"> TDA_Icon </Link>
        <Link to="/posts"> Posts </Link>   

        
       
        </header>
    );
        
}

export default NavBar;