import React from "react";
import Jumbotron from 'react-bootstrap/Jumbotron';
import moment from 'moment';

class UpgradedPostListItem extends React.Component {
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

    renderBody(body, MAX_LENGTH) {
        return(
            <div>
                {{body}.length > MAX_LENGTH ?
                (
                    <div>
                        {`${{body}.substring(0, MAX_LENGTH)}...`}<a href="#">Read more</a>
                    </div>
                ) :
                <p>{body}</p>
                }
            </div>
        );
    } 

    

    renderTags(tags) {
        return tags.map(tag => {
            return <span key={tag}>{tag}</span>;
        });
    }

    renderImage() {

    }
    
    render() {
        const { post } = this.props;
        return(
            <Jumbotron>
                <h1 class="post-text-title"><strong>{post.title}</strong></h1>
                <h4>
                    <span class="blocktext-small">{this.renderDate(post.createdAt)}</span>
                    <span>, </span>
                    <span>{moment(post.createdAt).fromNow()}</span>
                </h4>
                <div class="mt-3">
                    {this.renderBody(post.html, 100)}
                </div>
                <div><strong>Tags:</strong></div>
                <div>{post.tags.map((tag)=>`#${tag} `)}</div>
                <div>
                    <button type="button" class="btn btn-info btn-sm" onClick={() => {}}>Like</button>
                </div>
            </Jumbotron>

        );
    }
}


export default UpgradedPostListItem;