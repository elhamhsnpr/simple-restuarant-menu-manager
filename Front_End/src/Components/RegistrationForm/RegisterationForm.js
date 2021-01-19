import React, { useState } from 'react';
import axios from 'axios';
import './RegistrationForm.css';
import { API_BASE_URL } from '../../Constants/apiConstans';
import { withRouter } from "react-router-dom";



function RegistrationForm(props) {

    const [state, setState] = useState({
        FirstName: "",
        LastName: "",
        username: "",
        password: "",
        userType: ""
    })

    const handleChange = (e) => {
        const { id, value } = e.target
        setState(prevState => ({
            ...prevState,
            [id]: value
        }))
    }

    const sendDetailsToServer = () => {

        const payload = {
            "firstName": state.firstName,
            "lastName": state.lastName,
            "username": state.username,
            "password": state.password,
            "userType": state.userType,
        }
        axios.post(API_BASE_URL + 'sign-up', payload)
            .then(function (response) {
                console.log(response);
                if (response.status === 200) {
                    setState(prevState => ({
                        ...prevState,
                        'successMessage': 'Registration successful  ...'
                    }))
                    redirectToHome();
                    props.showError(null)
                } else {
                    props.showError("Some error ocurred");
                }
            })
            .catch(function (error) {
                console.log(error);
            });


    }

    const redirectToHome = () => {
        props.updateTitle('Home')
        props.history.push('/Home');
    }

    const redirectToLogin = () => {
        props.updateTitle('SignIn')
        props.history.push('/signin');
    }


    const handleSubmitClick = (e) => {
        e.preventDefault();

        sendDetailsToServer()

    }

    return (
        <div className="card col-12 col-lg-4  login-card mt-5 hv-center firstDiv" >
            <form>

                <div className="form-group text-left">
                    <label htmlFor="ExampleInputFirstname">First name</label>
                    <input type="text"
                        className="form-control"
                        id="firstName"
                        placeholder="First name"
                        value={state.firstName}
                        onChange={handleChange}
                    />
                </div>

                <div className="form-group text-left">
                    <label htmlFor="ExampleInputLastname">Last name</label>
                    <input type="text"
                        className="form-control"
                        id="lastName"
                        placeholder="Last name"
                        value={state.lastName}
                        onChange={handleChange}
                    />
                </div>

                <div className="form-group text-left">
                    <label htmlFor="ExampleInputLastname">User name</label>
                    <input type="text"
                        className="form-control"
                        id="username"
                        placeholder="User name"
                        value={state.username}
                        onChange={handleChange}
                    />
                </div>

                <div className="form-group text-left">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input type="password"
                        className="form-control"
                        id="password"
                        placeholder="Password"
                        value={state.password}
                        onChange={handleChange}
                    />
                </div>

                <div className="form-group text-left">
                    <label htmlFor="ExampleInputLastname">Type</label>
                    <input type="text"
                        className="form-control"
                        id="userType"
                        placeholder="Type"
                        value={state.userType}
                        onChange={handleChange}
                    />
                </div>

                <button
                    type="submit"
                    className="btn btn-primary"
                    onClick={handleSubmitClick}
                >
                    Sign UP
                </button>


            </form>
            <div className="alert alert-success mt-2" style={{display: state.successMessage ? 'block' : 'none' }} role="alert">
                {state.successMessage}
            </div>
            <div className="mt-2">
                <span>Already have an account? </span>
                <span className="loginText" onClick={() => redirectToLogin()}>Login here</span> 
            </div>
        </div>
    )
}

export default withRouter(RegistrationForm);