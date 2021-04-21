import React, { useState, useEffect } from 'react';
import SPECTRUM from './views/SPECTRUM';
import About from './views/About';
import Audition from './views/Audition';
import Donate from './views/Donate';
import Contact from './views/Contact';
import NavBar from './components/NavBar';
import Home from './views/Home';
import Login from './views/Login';
import { Route, Link, BrowserRouter, Switch } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { getPosts } from './actions/posts'
import Posts from './views/Posts';
import Post from './components/Posts/Post';
//import Form from '.components/Form/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import PostCreator from './views/PostCreator';



const App = () => {
  const [currentId, setCurrentID] = useState(null);

  return (
  <BrowserRouter> 
    <div>
        <NavBar/> 
        
        <Route exact path="/" component={Home} setCurrentID={setCurrentID}></Route> 
        <Route exact path="/SPECTRUM" component={SPECTRUM}></Route> 
        <Route exact path="/Audition" component={Audition}></Route> 
        <Route exact path="/Donate" component={Donate}></Route> 
        <Route exact path="/About" component={About}></Route> 
        <Route exact path="/Contact" component={Contact}></Route>
        <Route exact path = "/posts/:id" component={Post} />
        <Route exact path ="/History" component={Posts}></Route>
        <Route exact path ="/loginPage" component={Login}></Route>
        <Route exact path ="/postCreator" component={PostCreator} currentId={currentId} setCurrentID={setCurrentID}></Route>
        
         
    </div>    
    </BrowserRouter>
  );
      
}

export default App;

// Anything that we wrap with BrowserRouter will have access to the routing system
