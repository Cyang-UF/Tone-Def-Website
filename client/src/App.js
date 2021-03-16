import React from 'react';


function App() {
  return (
    <div>
      {/* This was in the HTML head file, might need to change the structure of app,js for that */}
       
       <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
      <div class= "split left grid-container">
        <main class= "centered"> 
        {/* <img class = "FrontCover " src = "../Images/Capture.JPG" alt = " team">  </img>   */}           
          <a href="index.html">Tone Def Acapellla</a>        
        </main>

        <footer class = "icon_sepaeration">     
          <a href="#" class="fa fa-facebook"></a>
          <a href="#" class="fa fa-twitter"></a>
          <a href="#" class="fa fa-instagram"></a>
          <a href="#" class="fa fa-spotify"></a>      
        </footer>
      </div>
    
    
      <div class= "split right ">
        <header>
          <b>The Feed</b>
        </header>
      </div>
    </div>
  );
}

export default App;
