import React from 'react'
import {Form, Button,} from 'react-bootstrap';
import './Login.css'
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
// import AuthenticationService from '/Users/newbie_developer/workspace/bank-app/src/auth/AuthenticationService.js';

export function Login(props) {
    const navigate = useNavigate();
    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
        },
        onSubmit: values => {
            let username = values.email;
            username = username.substring(0,username.indexOf("@"));
            const password = values.password
            navigate('/account-summary');
            // AuthenticationService.login(username, password)
            // .then((loginResult => {
            //     alert(loginResult);
            // }))
        },
    });

    return (
        <Form className="form-container" onSubmit={formik.handleSubmit}>

            <h1 className="login-header">Welcome</h1>
            <h4 className="login-sub-header text-muted">Login to manage your accounts</h4>
            
            <Form.Group className="email-container" controlId="email">
                <Form.Control className="input-text-field"
                    name="email" 
                    onChange={formik.handleChange} 
                    value={formik.values.email} 
                    type="email" 
                    placeholder="Enter email" />
                <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>
            <Form.Group className="password-container" controlId="password">
                <Form.Control className="input-text-field" 
                    name="password" 
                    onChange={formik.handleChange}
                    value={formik.values.password}
                    type="password" 
                    placeholder="Password" />
                <Form.Text className="text-muted">
                    We only sell passwords once.
                </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Remember me" />
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    )
}
