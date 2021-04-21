import React, { useState, useEffect } from "react";
import Jumbotron from'react-bootstrap/Jumbotron';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useDispatch, useSelector } from 'react-redux';
import { createPost, updatePost } from '../../actions/posts';

const PostForm = ({ currentId, setCurrentId }) => {
    // This is for the upgraded posts
    const [postData, setPostData] = useState({ title: '', html: '', tags: '' });
    const post = useSelector((state) => (currentId ? state.posts.find((p) => p._id === currentId) : null));
    // This allows us to actually dispatch actions
    const dispatch = useDispatch();
    const user = JSON.parse(localStorage.getItem('profile'));


    const handleSubmit = async (e) => {
        e.preventDefault();
        
        dispatch(createPost(postData));
        clear();

    };

    useEffect(() => {
        if (post) setPostData(post);
    }, [post]);

    const clear = () => {
        //setCurrentId(0);
        setPostData({ title: '', html: '', tags: '' });
    };

    if (user === null) {
        return (
            <p id="blocktext-small">Only Admins can create posts.</p>
        );
    }

    if (user.result.isAdmin === true) {
        return(
            <Jumbotron>
                <Form>
                    <Form.Group controlId="formBasicTitle">
                        <Form.Label>Title</Form.Label>
                        <Form.Control size="lg" type="text" placeholder="Enter title..." fullWidth value={postData.title} onChange={(e) => setPostData({ ...postData, title: e.target.value })}/>
                        <Form.Text className="text-muted">
                        This will be displayed at the top of the post.
                        </Form.Text>
                    </Form.Group>
    
                    <Form.Group controlId="formBasicBody">
                        <Form.Label>Message</Form.Label>
                        <Form.Control size="lg" type="text" placeholder="Type your post..." fullWidth value={postData.html} onChange={(e) => setPostData({ ...postData, html: e.target.value })}/>
                    </Form.Group>
    
                    <Form.Group controlId="formBasicTags">
                        <Form.Label>Tags</Form.Label>
                        <Form.Control size="lg" type="text" placeholder="Add your comma separated tags..." fullWidth value={postData.tags} onChange={(e) => setPostData({ ...postData, tags: e.target.value.split(',') })}/>
                    </Form.Group>
    
                    <Button size="lg" variant="primary mt-2 mr-3" onClick={handleSubmit}>
                        Submit
                    </Button>
    
                    <Button size="lg" variant="outline-danger mt-2" onClick={clear}>
                        Clear
                    </Button>
                </Form> 
            </Jumbotron>
        )
    }

    return (
        <p id="blocktext-small">Only Admins can create posts.</p>
    );
}

export default PostForm;