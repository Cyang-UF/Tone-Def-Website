import React from "react";
import PostForm from '../components/Form/PostForm';

class PostCreator extends React.Component{
    
    render() {
        return (
            <div>
                <p id="blocktext">  Create an Admin Post </p>
                <PostForm />
            </div>
        );
    }
}

export default PostCreator;