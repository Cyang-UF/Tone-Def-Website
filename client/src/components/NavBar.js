import React, { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import icon from '../Images/icon.png';
import { useHistory, Link, useLocation } from 'react-router-dom';
import {Nav, Navbar, Button} from 'react-bootstrap';


function NavBar(){
    const [admin, setAdmin] = useState(JSON.parse(localStorage.getItem('profile')));
    const dispatch = useDispatch();
    const history = useHistory();
    const location = useLocation();

    const logout = () => {
        dispatch({ type: 'LOGOUT' });
        history.push("/loginPage");    
    };

    useEffect(() => {
        const token = admin?.token;
        setAdmin(JSON.parse(localStorage.getItem('profile')));
    }, [location]);

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
                <div>{admin ? (
                    <span id="blocktext-small-white">Hello, {admin.result.name}!</span>
                ) : (
                   <></>
                )}</div>
                <div>{admin ? (
                    <Button variant = "outline-light" onClick={logout}>Logout</Button>
                ) : (
                    <Button as={Link} to="/loginPage" variant = "outline-light">Login</Button>
                )}</div>

            </Navbar.Collapse>
        </Navbar>  
    );
}

export default NavBar;