import React, { useState } from "react";
import Jumbotron from'react-bootstrap/Jumbotron';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import FileBase from 'react-file-base64';
import { useDispatch } from 'react-redux';
import { createPost } from '../../actions/posts';

const PostForm = () => {
    const [postData, setPostData] = useState({creator: '', title: '', body: '', tags: '', selectedFile: ''});
    const dispatch = useDispatch();


    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch(createPost(postData));
    }

    const clear = () => {

    }
    return(

        <Jumbotron>
            <Form>
                <Form.Group controlId="formBasicTitle">
                    <Form.Label>Title</Form.Label>
                    <Form.Control type="text" placeholder="Enter title..." fullWidth value={postData.title} onChange={(e) => setPostData({ ...postData, title: e.target.value })}/>
                    <Form.Text className="text-muted">
                    This will be displayed at the top of the post.
                    </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicBody">
                    <Form.Label>Body</Form.Label>
                    <Form.Control size="sm" type="text" placeholder="Type your post..." fullWidth value={postData.body} onChange={(e) => setPostData({ ...postData, body: e.target.value })}/>
                </Form.Group>

                <Form.Group controlId="formBasicTags">
                    <Form.Label>Tags</Form.Label>
                    <Form.Control size="sm" type="text" placeholder="Add your tags..." fullWidth value={postData.tags} onChange={(e) => setPostData({ ...postData, tags: e.target.value })}/>
                </Form.Group>

                <div>
                    <FileBase type="file" multiple={false} onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })} />
                </div>

                <Button variant="primary mt-2 mr-3" onSubmit={handleSubmit}>
                    Submit
                </Button>

                <Button variant="outline-danger mt-2" onCLick={clear}>
                    Clear
                </Button>

            </Form>
            
        </Jumbotron>
    )
}

export default PostForm;