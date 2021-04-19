import React from "react";
import icon from '../Images/icon.png';
import { Route, Link } from 'react-router-dom';
import {Nav, Navbar, Button} from 'react-bootstrap';


function NavBar(){
    return(   
        <Navbar expand='lg' fixed="top" variant="light mb-5">

            <Navbar.Brand as={Link} to="/" ><img src={icon} class = "icon" /></Navbar.Brand>
            <Navbar.Collapse id="basic-navbar-nav">
                
                <Nav className="mr-auto">
                    <Nav.Link as={Link} to="/" ><x>Home</x></Nav.Link>
                    <Nav.Link as={Link} to="/About"><x>About</x></Nav.Link>
                    <Nav.Link as={Link} to="/SPECTRUM" ><x>SPECTRUM</x></Nav.Link>
                    <Nav.Link as={Link} to="/Audition" ><x>Audition</x></Nav.Link>
                    <Nav.Link as={Link} to="/Contact"><x>Contact</x></Nav.Link>
                    <Nav.Link as={Link} to="/Donate"><x>Donate</x></Nav.Link>                    
                    <Nav.Link as={Link} to="/History"><x>Posts</x></Nav.Link>
                </Nav>
                
                <Button as={Link} to="/loginPage" variant = "outline-light">Login</Button>
            </Navbar.Collapse>
        </Navbar>  
    );
}

export default NavBar;