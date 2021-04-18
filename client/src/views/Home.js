import React from 'react';
import axios from "axios";
import UpgradedPostListItem from "../components/Posts/UpgradedPostListItem";
import groupPic from '../Images/Capture.JPG';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';



class Home extends React.Component{
    state = {
      posts: []
  }

  componentDidMount() {
      this.getPosts();
  }

  async getPosts() {
      const res = await axios.get('/posts/');
      //const res = await axios.get('/upgradedposts/');
      this.setState({ posts: res.data });
  }

  // return a collection of multiple <div>s to represent each blog post item
  renderList() {
      return this.state.posts.reverse().slice(0,3).map(post => {
          return <UpgradedPostListItem post={post} key={post._id}/>;
      });
  }

  render() {
      return (
        <div class = "grid-container">
          

          <div class = "grid-item LeftSide"> 
            <p id="blocktext"> Tone Def A Cappella </p>
          
           
            <img src={groupPic} class = "img" />;
            

            


            <div class="footer">
              <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
              
              <a href="https://open.spotify.com/artist/7qJdYIQOTw75BsL7o9NaKh?si=Lckb9eFBSmuRFbNDEkknjA&nd=1" class="fa fa-spotify fa-3x"></a>
              <a href="https://www.instagram.com/tdacappella/" class="fa fa-instagram fa-3x"></a>
              <a href="https://www.youtube.com/channel/UCfMtsN-sww0t6d6wv0j983A" class="fa fa-youtube fa-3x"></a>
              <a href="https://www.facebook.com/tdacappella" class="fa fa-facebook fa-3x"></a>
              

            </div>

            
          </div>

          <div class = "grid-item RightSide">
            <p id="blocktext"> Recent Posts </p>
            <h4 style={{display: "flex", justifyContent: "center", alignItems: "center"}}>Click 'Home' Tab to view oldests posts.</h4>
            <div>{this.renderList()}</div>
            <div class="col text-center"><Button as={Link} to="/Posts" variant="dark">More</Button>{' '}</div>
          </div>   
        </div>
      );
  }
}

export default Home;