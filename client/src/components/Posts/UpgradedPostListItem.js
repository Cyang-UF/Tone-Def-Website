import React, { useState } from "react";
import Jumbotron from 'react-bootstrap/Jumbotron';
import moment from 'moment';
import { useDispatch} from "react-redux";
import { likePost, deletePost } from '../../actions/posts';

const UpgradedPostListItem = ({ post, setCurrentId }) => {
    const monthNames = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    const date = new Date(post.createdAt);
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    const dispatch = useDispatch();

    if (user === null) {
        return (
            <Jumbotron>
                <h1 class="post-text-title"><strong>{post.title}</strong></h1>
                <h4>
                    <span class="blocktext-small"><strong>{`${monthNames[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`}</strong></span>
                    <span>, </span>
                    <span>{moment(post.createdAt).fromNow()}</span>
                </h4>
                <div class="mt-3 mb-3">
                    <div style={{fontSize: "1.3rem", fontFamily: "Raleway"}}>{post.html}</div>
                </div>
                <div style={{fontSize: "1.3rem", fontFamily: "Raleway"}}><strong>Tags:</strong></div>
                <div style={{fontSize: "1.1rem", fontFamily: "Raleway"}}>{post.tags.map((tag)=>`#${tag} `)}</div>
                <div>
                    <button type="button" class="btn btn-info btn-sm mr-3" onClick={() => dispatch(likePost(post._id))}>Like {post.likeCount}</button>
                </div>
            </Jumbotron>
        );
    }

    if (user.result.isAdmin === false) {
        return (
            <Jumbotron>
                <h1 class="post-text-title"><strong>{post.title}</strong></h1>
                <h4>
                    <span class="blocktext-small"><strong>{`${monthNames[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`}</strong></span>
                    <span>, </span>
                    <span>{moment(post.createdAt).fromNow()}</span>
                </h4>
                <div class="mt-3 mb-3">
                    <div style={{fontSize: "1.3rem", fontFamily: "Raleway"}}>{post.html}</div>
                </div>
                <div style={{fontSize: "1.3rem", fontFamily: "Raleway"}}><strong>Tags:</strong></div>
                <div style={{fontSize: "1.1rem", fontFamily: "Raleway"}}>{post.tags.map((tag)=>`#${tag} `)}</div>
                <div>
                    <button type="button" class="btn btn-info btn-sm mr-3" onClick={() => dispatch(likePost(post._id))}>Like {post.likeCount}</button>
                </div>
            </Jumbotron>
        );
    }



    return(
        <Jumbotron>
            <h1 class="post-text-title"><strong>{post.title}</strong></h1>
            <h4>
                <span class="blocktext-small"><strong>{`${monthNames[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`}</strong></span>
                <span>, </span>
                <span>{moment(post.createdAt).fromNow()}</span>
            </h4>
            <div class="mt-3 mb-3">
                <div style={{fontSize: "1.3rem", fontFamily: "Raleway"}}>{post.html}</div>
            </div>
            <div style={{fontSize: "1.3rem", fontFamily: "Raleway"}}><strong>Tags:</strong></div>
            <div style={{fontSize: "1.1rem", fontFamily: "Raleway"}}>{post.tags.map((tag)=>`#${tag} `)}</div>
            <div>
                <button type="button" class="btn btn-info btn-sm mr-3" onClick={() => dispatch(likePost(post._id))}>Like {post.likeCount}</button>
                <button type="button" class="btn btn-danger btn-sm mr-3" onClick={() => dispatch(deletePost(post._id))}>Delete</button>
            </div>
        </Jumbotron>
    );
}


export default UpgradedPostListItem;