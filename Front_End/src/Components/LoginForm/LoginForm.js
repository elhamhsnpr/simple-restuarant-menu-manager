import React, { useState } from 'react';
import axios from 'axios';
import { API_BASE_URL } from '../../Constants/apiConstans';
import { withRouter } from "react-router-dom";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';


function LoginForm(props) {
    const [state, setState] = useState({
        username: "",
        password: "",
        successMessage: null
    })

    const handleChange = (e) => {
        const { id, value } = e.target
        setState(prevState => ({
            ...prevState,
            [id]: value
        }))
    }

    const handleSubmitClick = (e) => {
        e.preventDefault();
        const payload = {
            "username": state.username,
            "password": state.password
        }

        axios.defaults.withCredentials = true;
        axios.post(API_BASE_URL + 'sign-in', payload)
            .then(function (response) {
                console.log(response)
                console.log(Error)
                if (response.status === 200) {
                    setState(prevState => ({
                        ...prevState,
                        'successMessage': 'Login successful. Redirecting to home page..'
                    }))
                    // redirectToHome();
                    redirectToAddCategor_Item();
                    props.showError(null)
                }

            })
            .catch(function (error) {
                console.log(error);
                props.showError("Username and password do not match")
            });
    }

    const redirectToAddCategor_Item = () => {
        props.updateTitle('Add-Categor-Item')
        props.history.push('/Admin/AddCategory-Item');
    }

    return (

        <Form>
            <Form.Group controlId="validationCustomUsername">
                <Form.Label>Username</Form.Label>
                <InputGroup>
                    <Form.Control 
                        type="text"
                        id="username"
                        placeholder="Username"
                        aria-describedby="inputGroupPrepend"
                        required
                        value={state.username}
                        onChange={handleChange}
                    />
                    <Form.Control.Feedback type="invalid">
                        Please choose a username.
            </Form.Control.Feedback>
                </InputGroup>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                    type="password"
                    id="password"
                    placeholder="Password"
                    value={state.password}
                    onChange={handleChange}
                />

            </Form.Group>
            <Button variant="primary" type="submit" onClick={handleSubmitClick}>
                Submit
  </Button>
        
        </Form>
        







    )
}

export default withRouter(LoginForm);