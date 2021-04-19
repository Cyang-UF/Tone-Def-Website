import React from "react";
import axios from "axios";
import UpgradedPostListItem from "../components/Posts/UpgradedPostListItem";

class Posts extends React.Component{
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

    renderList() {
        return this.state.posts.reverse().map(post => {
            return <UpgradedPostListItem post={post} key={post._id}/>;
        });
    }

    render() {
        return (
            <div class="grid-container-single">
                <div class = "grid-item RightSide">
                    <h1 id="blocktext" class="mt-3">Post History</h1>
                    <h1 id="blocktext-small">Click 'Posts' tab to reverse the chronological post ordering.</h1>
                    <div>{this.renderList()}</div>
                </div>
            </div>
        );
    }
}

export default Posts;