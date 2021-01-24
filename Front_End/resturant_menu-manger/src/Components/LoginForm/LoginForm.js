import React, { useState } from 'react';
import axios from 'axios';
import './LoginForm.css';
import { API_BASE_URL } from '../../Constants/apiConstans';
import { withRouter } from "react-router-dom";

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

        axios.defaults.withCredentials=true;
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

    const redirectToAddCategor_Item=()=>{
        props.updateTitle('AddCategor_Item')
        props.history.push('/AddCategory_Item');
    }
    
    // const redirectToHome = () => {
    //     props.updateTitle('Home')
    //     props.history.push('/home');
    // }
    //  const redirectToRegister = () => {
    //     props.history.push('/signUp');
    //     props.updateTitle('Register');
    // }

    return (
        <div className="card col-12 col-lg-4  mt-5 hv-center firstDiv">
            <form>
                <div className="form-group text-left">
                    <label htmlFor="exampleInputEmail1">Username</label>
                    <input type="text"
                        className="form-control"
                        id="username"
                        placeholder="Enter Username"
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

                {/* <div className="form-group text-left">
                    <label htmlFor="exampleInputPassword1">userType</label>
                    <input type="text"
                        className="form-control"
                        id="userType"
                        placeholder="userType"
                        value={state.userType}
                        onChange={handleChange}
                    />
                </div> */}
                <div className="form-check">
                </div>
                <button
                    type="submit"
                    className="btn btn-primary"
                    onClick={handleSubmitClick}
                >Submit</button>
            </form>
            <div className="alert alert-success mt-1" style={{ display: state.successMessage ? 'block' : 'none' }} role="alert">
                {state.successMessage}
            </div>
            {/* <div className="registerMessage">
                <span>Dont have an account? </span>
                <span className="loginText" onClick={() => redirectToRegister()}>signUp</span>
            </div> */}

        </div>
    )
}

export default withRouter(LoginForm);