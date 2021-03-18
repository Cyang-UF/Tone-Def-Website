import React from "react";
import {Link} from 'react-router-dom'

function NavBar(){
    return(
        <c>         
            <Link to="/Music"> Music</Link>
            <Link to="/Members"> Members</Link>
            <Link to="/Contact"> Contact</Link>
           <Link to="/Donate"> Donate</Link>
        </c>

    );
        
}

export default NavBar;