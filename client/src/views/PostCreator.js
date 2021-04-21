import React from "react";
import PostForm from '../components/Form/PostForm';

const PostCreator = ({ currentID, setCurrentId}) => {
    return (
        <div>
            <p id="blocktext">  Create an Admin Post </p>
            <PostForm currentId={currentID} setCurrentId={setCurrentId}/>
        </div>
    );
}

export default PostCreator;