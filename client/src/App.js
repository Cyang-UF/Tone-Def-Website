import React from 'react';
import Music from './Music';
import Members from './Members';
import Donate from './Donate';
import Contact from './Contact';
import NavBar from './NavBar';
import { Route, Link } from "react-router-dom";


function App() {
  return (
    <div>
      {/* This was in the HTML head file, might need to change the structure of app.js for that */}       
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>


      {/* Left side */} 
      <div className= "split left grid-container">
      
        <main className= "centered"> 
          {/* <img className = "FrontCover " src = "../Images/Capture.JPG" alt = " team">  </img>   */}           
          <a href="index.html">Tone Def Acapellla</a>     
          <NavBar/>         
          <Route exact path="/Music" component={Music}/>
          <Route exact path="/Members" component={Members}/>
          <Route exact path="/Donate" component={Donate}/>
          <Route exact path="/Contact" component={Contact}/>
        </main>

        <footer className = "icon_sepaeration">     
          <a href="#" className="fa fa-facebook"></a>
          <a href="#" className="fa fa-twitter"></a>
          <a href="#" className="fa fa-instagram"></a>
          <a href="#" className="fa fa-spotify"></a>      
        </footer>
      </div>
    
      {/* Right side */} 
      <div className= "split right ">
        <header><b>The Feed</b>  </header>
      </div>


    </div>
  );
}

export default App;