import React, { useEffect } from 'react';
import Music from './views/Music';
import Members from './views/Members';
import Donate from './views/Donate';
import Contact from './views/Contact';
import NavBar from './components/NavBar';
import Home from './views/Home';
import Login from './views/Login';
import { Route, Link, BrowserRouter, Switch } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { getPosts } from './actions/posts'
import PostList from './components/Posts/PostList';
import Post from './components/Posts/Post';
//import Form from '.components/Form/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import PostCreator from './views/PostCreator';



const App = () => {
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

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
        <Route exact path ="/login" component={Login}></Route>
        <Route exact path ="/postCreator" component={PostCreator}></Route>
        
         
    </div>    
    </BrowserRouter>
  );
      
}

export default App;

// Anything that we wrap with BrowserRouter will have access to the routing system
