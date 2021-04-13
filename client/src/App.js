import React from 'react';
import Music from './views/Music';
import Members from './views/Members';
import Donate from './views/Donate';
import Contact from './views/Contact';
import NavBar from './components/NavBar';
import Home from './views/Home';
import { Route, Link, BrowserRouter, Switch } from "react-router-dom";
import PostList from './components/PostList';
import Post from './components/Post';
import 'bootstrap/dist/css/bootstrap.min.css';



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
        <Route exact path = "/posts/:id" component={Post} />
        <Route exact path ="/posts" component={PostList}></Route>

        
         
    </div>    
    </BrowserRouter>
  );
      
}

export default App;

// Anything that we wrap with BrowserRouter will have access to the routing system
