import React, { useState } from "react";
import Jumbotron from'react-bootstrap/Jumbotron';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';

const Form = () => {

const [postData, setPostData] = useState({creator: '', title: '', body: '', tags: '', selectedFile: ''});


const handleSubmit = () => {

}
    return(

        <Jumbotron className={classes.Jumbotron}>
            <Form autoComplete="off" noValidate className={classes.form} onSubmit={handleSubmit}>
                <Form.Group controlId="formBasicTitle">
                    <Form.Label>Title</Form.Label>
                    <Form.Control 
                        type="text" 
                        placeholder="Enter title..." 
                        fullWidth 
                        value={postData.creator} 
                        onChange={}/>
                    <Form.Text className="text-muted">
                    This will be displayde at the top of the post.
                    </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicBody">
                    <Form.Label>Body</Form.Label>
                    <Form.Control size="sm" type="text" placeholder="Type your post..." />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
            
        </Jumbotron>
    )
}

export default Form;