import React from 'react';
import Music from './Music';
import Members from './Members';
import Donate from './Donate';
import Contact from './Contact';
import NavBar from './NavBar';
import Home from './Home';
import { Route, Link, BrowserRouter } from "react-router-dom";


function App() {
  return (
  <BrowserRouter>
    <div>
        <NavBar/> 
      
        <Route exact path="/" component={Home}></Route> 
        <Route exact path="/Music" component={Music}></Route> 
        <Route exact path="/Members" component={Members}></Route> 
        <Route exact path="/Donate" component={Donate}></Route> 
        <Route exact path="/Contact" component={Contact}></Route>
        
         
    </div>    
    </BrowserRouter>
  );
      
}

export default App;


