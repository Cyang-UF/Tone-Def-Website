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
      const res = await axios.get('http://localhost:5000/posts/');
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