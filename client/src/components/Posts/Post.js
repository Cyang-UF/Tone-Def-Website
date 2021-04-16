import React from "react";
import axios from "axios";

class Post extends React.Component {
    state = {
        post: {}
    }
    
    componentDidMount() {
        this.getPost(); // Call getPost() so that you get the value in the post
    }
    
    // Singular version of getPosts
    async getPost() {
        const res = await axios.get(
            `/posts/${this.props.match.params.id}`);
        this.setState({post: res.data});
    }
  
    renderHTML () {
        return {__html: this.state.post.html};
    }

    renderPost() {
        return <div dangerouslySetInnerHTML={this.renderHTML()}></div>;
    }

    render() { 
        return(<div>{this.renderPost()}</div>);
    }
}

export default Post;