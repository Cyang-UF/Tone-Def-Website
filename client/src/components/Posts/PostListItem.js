import React from "react";
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';
import ReactMarkdown from "react-markdown";
import { useSelector } from 'react-redux';

class PostListItem extends React.Component {
    constructor(props) {
        super(props);                                   // Be explict in the consturctor to give us access to props of this class
        this.onShowPost = this.onShowPost.bind(this);   // Bind 'this' to the whole class rather than a single function
    }

    onShowPost() {
        window.location.pathname = `/posts/${this.props.post._id}`; // I can now access props > post > _id because of the constructor
    }
    
    renderDate(dateString) {
        const monthNames = ["January","February","March","April","May","June","July","August","September","October","November","December"];
        const date = new Date(dateString);
        return `${monthNames[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
    }

    renderBody(body) {
        return <ReactMarkdown source={body} />;
    }

    renderTags(tags) {
        return tags.map(tag => {
            return <span key={tag}>{tag}</span>;
        });
    }
    
    render() {
        const { post } = this.props;
        return(
            <Jumbotron>
            <h1 class = "display-4"><strong>{post.title}</strong></h1>
            <h1 class = "display-4">{post.creator}</h1>
            <h1 class = "display-6">{this.renderDate(post.createdAt)}</h1>
            <div>
                {this.renderBody(post.html)}
            </div>
            <div><strong>Tags:</strong></div>
            <div>{this.renderTags(post.tags)}</div>
            <div>{post.creator}</div>
            </Jumbotron>
        );
    }
}


export default PostListItem;