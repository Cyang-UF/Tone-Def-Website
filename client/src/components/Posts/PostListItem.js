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
            <h1 class = "display-4">{post.title}</h1>
            <div>{this.renderBody(post.html)}</div>
            <div>{this.renderTags(post.tags)}</div>
            <Button variant="primary">Primary</Button>{' '}
            </Jumbotron>

            // <div class = "jumbotron">
            // <h3>{post.title}</h3>
            // <span>{this.renderDate(post.createdAt)}</span>
            // <div>{this.renderTags(post.tags)}</div>
            // <button onClick={this.onShowPost}></button>
            // </div>
        );
    }
}

// Another take on the posts:
/*
const Posts = () => {
    const posts = useSelector((state) => state.posts);
    console.log(posts);
    return (
        <Jumbotron>
            <h1 class = "display-4">POSTS</h1>
            </Jumbotron>
    );
};
*/

export default PostListItem;