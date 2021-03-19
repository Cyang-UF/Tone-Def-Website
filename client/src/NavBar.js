import React from 'react';
import Home from './Home';
import Music from './Music';
import Members from './Members';
import Donate from './Donate';
import Contact from './Contact';
import { Route, Link } from "react-router-dom";


function NavBar(){
    return(
        <header classname = "centered">         
         
        <Link to="/"> Home</Link>   
        <Link to="/Music"> Music</Link>  
        <Link to="/Members"> Members</Link>
        <Link to="/Contact"> Contact</Link>
        <Link to="/Donate"> Donate</Link>
        
       
        </header>
    );
        
}

export default NavBar;