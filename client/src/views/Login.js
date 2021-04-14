import React from "react";
import {Button} from 'react-bootstrap';

class Login extends React.Component{
    
    render() {
        return (
            <div>
                <p id="blocktext">  Admin and Member Login </p>
                <p id="blocktext">  Test of Form </p>
                <div class="btn-toolbar"  style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                    <div><Button inline href="/login" variant ="outline-dark mr-3">Login</Button></div>
                    <div><Button inline href="/postCreator" variant ="outline-danger">Form Test</Button></div>
                </div>
            </div>
        );
    }
}

export default Login;