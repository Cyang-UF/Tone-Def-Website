import React from "react";
import {Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div>
            <p id="blocktext">  Admin and Member Login </p>
            <p id="blocktext">  Test of Form </p>
            <div class="btn-toolbar"  style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                <div><Button inline as={Link} to="/loginPage" variant ="outline-dark mr-3">Login</Button></div>
                <div><Button inline as={Link} to="/postCreator" variant ="outline-danger">Form Test</Button></div>
            </div>
        </div>
    );
}

export default Login;