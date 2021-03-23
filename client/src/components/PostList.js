import React from "react";
import axios from "axios";
import PostListItem from "./PostListItem";

class PostList extends React.Component {
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
        return <div>{this.renderList()}</div>
    }
}

export default PostList;