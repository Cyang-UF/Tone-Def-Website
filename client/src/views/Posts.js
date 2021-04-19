import React from "react";
import PostList from "../components/Posts/PostList";

class Posts extends React.Component{

    render() {
        return (
            <div>
                <h1 id="blocktext" class="mt-3">Post History</h1>
                <h1 id="blocktext-small">Click 'Posts' tab to reverse the chronological post ordering.</h1>
                <PostList/>
            </div>
        );
    }
}

export default Posts;