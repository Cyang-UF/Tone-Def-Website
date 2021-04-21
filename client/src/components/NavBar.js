import React, { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import icon from '../Images/icon.png';
import { useHistory, Link, useLocation } from 'react-router-dom';
import {Nav, Navbar, Button} from 'react-bootstrap';


function NavBar(){
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    const dispatch = useDispatch();
    const history = useHistory();
    const location = useLocation();

    const logout = () => {
        dispatch({ type: 'LOGOUT' });
        history.push("/loginPage");    
    };

    useEffect(() => {
        const token = user?.token;
        setUser(JSON.parse(localStorage.getItem('profile')));
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
                <div>{user ? (
                    <span id="blocktext-small-white">Hello, {user.result.name}!</span>
                ) : (
                   <></>
                )}</div>

                
                <div>{user ? (
                    <Button variant = "outline-light" as={Link} to="/postCreator" variant = "outline-light">Create Post</Button>
                ) : (
                   <></>
                )}</div>

                <div class = "mr-4"> </div>

                <div>{user ? (
                    <Button class = "ml-3" variant = "outline-light" onClick={logout}>Logout</Button>
                ) : (
                    <Button as={Link} to="/loginPage" variant = "outline-light">Login</Button>
                )}</div>

            </Navbar.Collapse>
        </Navbar>  
    );
}

export default NavBar;