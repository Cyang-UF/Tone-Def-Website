import React from "react";
import Jumbotron from 'react-bootstrap/Jumbotron';
import moment from 'moment';
import { updatePost } from "../../api";

class UpgradedPostListItem extends React.Component {
    constructor(props) {
        super(props);                                   // Be explict in the consturctor to give us access to props of this class
        this.onEditPost = this.onEditPost.bind(this);   // Bind 'this' to the whole class rather than a single function
    }

    onEditPost() {
        this.props.currentID = this.props._id;
        window.location.pathname = `/postCreator`;
    }
    
    renderDate(dateString) {
        const monthNames = ["January","February","March","April","May","June","July","August","September","October","November","December"];
        const date = new Date(dateString);
        return `${monthNames[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
    }

    render() {
        const { post } = this.props;
        return(
            <Jumbotron>
                <h1 class="post-text-title"><strong>{post.title}</strong></h1>
                <h4>
                    <span class="blocktext-small"><strong>{this.renderDate(post.createdAt)}</strong></span>
                    <span>, </span>
                    <span>{moment(post.createdAt).fromNow()}</span>
                </h4>
                <div class="mt-3 mb-3">
                    <div style={{fontSize: "1.3rem", fontFamily: "Raleway"}}>{post.html}</div>
                </div>
                <div style={{fontSize: "1.3rem", fontFamily: "Raleway"}}><strong>Tags:</strong></div>
                <div style={{fontSize: "1.1rem", fontFamily: "Raleway"}}>{post.tags.map((tag)=>`#${tag} `)}</div>
                <div>
                    <button type="button" class="btn btn-info btn-sm mr-3" onClick={() => {}}>Like {post.likeCount}</button>
                    <button type="button" class="btn btn-warning btn-sm mr-3" onClick={() => {}}>Edit</button>
                    <button type="button" class="btn btn-danger btn-sm mr-3" onClick={() => {}}>Delete</button>
                </div>
            </Jumbotron>

        );
    }
}


export default UpgradedPostListItem;