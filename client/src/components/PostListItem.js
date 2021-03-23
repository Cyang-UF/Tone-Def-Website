import React from "react";

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

    renderTags(tags) {
        return tags.map(tag => {
            return <span key={tag}>{tag}</span>;
        });
    }
    
    render() {
        const { post } = this.props;
        return(
            <button onClick={this.onShowPost}>
                <h3>{post.title}</h3>
                <span>{this.renderDate(post.createdAt)}</span>
                <div>{this.renderTags(post.tags)}</div>
            </button>
        );
    }
}

export default PostListItem;