import React from 'react';
import axios from "axios";
import PostListItem from "../components/PostListItem";


class Home extends React.Component{
    state = {
      posts: []
  }

  componentDidMount() {
      this.getPosts();
  }

  async getPosts() {
      const res = await axios.get('/posts/');
      this.setState({ posts: res.data });
  }

  // return a collection of multiple <div>s to represent each blog post item
  renderList() {
      return this.state.posts.map(post => {
          return <PostListItem post={post} key={post._id}/>;
      });
  }

  render() {
      return (
        <div class = "grid-container">
          

          <div class = "grid-item LeftSide"> 
            <p id="blocktext"> Tone Def A Cappella </p>


            <div class="footer">
              <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
              
              <a href="https://open.spotify.com/artist/7qJdYIQOTw75BsL7o9NaKh?si=Lckb9eFBSmuRFbNDEkknjA&nd=1" class="fa fa-spotify fa-3x"></a>
              <a href="https://www.instagram.com/tdacappella/" class="fa fa-instagram fa-3x"></a>
              <a href="https://www.youtube.com/channel/UCfMtsN-sww0t6d6wv0j983A" class="fa fa-youtube fa-3x"></a>
              <a href="https://www.facebook.com/tdacappella" class="fa fa-facebook fa-3x"></a>
              

            </div>

            
          </div>

          <div class = "grid-item RightSide">
            <p id="blocktext"> The Feed </p>
            <div>{this.renderList()}</div>
          </div>   
        </div>
      );
  }
}

export default Home;