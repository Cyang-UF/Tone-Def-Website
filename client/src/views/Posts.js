import React from "react";
import PostList from "../components/Posts/PostList";

class Posts extends React.Component{

    render() {
        return (
            <div>
                <h1 class="mt-3">Post History</h1>
                <h3>Click'Posts' tab to reverse the chronological post ordering.</h3>
                <PostList/>
            </div>
        );
    }
}

export default Posts;