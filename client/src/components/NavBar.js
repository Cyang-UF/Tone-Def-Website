import React from "react";
import icon from '../Images/icon.svg';
import { Route, Link } from 'react-router-dom';


function NavBar(){
    return(
        <header className = "HeaderStyle">       
    
        {/**<Link to="/"> <img src={icon} class = "icon" /> </Link>**/}    
        <Link to="/"> <x>TD_Icon</x> </Link>
        <Link to="/"> <x>Home</x> </Link>   
        <Link to="/Music"> <x>Music</x></Link>  
        <Link to="/Members"> <x>Members</x></Link>
        <Link to="/Contact"> <x>Contact</x></Link>
        <Link to="/Donate"> <x>Donate</x></Link>
        <Link to="/posts"> <x>Posts</x> </Link>   
       
        
       
        </header>
    );
        
}

export default NavBar;