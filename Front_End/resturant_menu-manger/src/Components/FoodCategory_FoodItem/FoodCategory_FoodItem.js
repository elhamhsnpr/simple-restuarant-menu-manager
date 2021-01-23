import React, { useState } from 'react';
import axios from 'axios';
import './FoodCategory_FoodItem.css';
import { API_BASE_URL } from '../../Constants/apiConstans';
import { withRouter } from "react-router-dom";

function AddCategory_Item(props) {

    const [state, setState] = useState({
        category: "",
        item: "",
        price: "",
        description: "",
        successMessage: null

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
            "category": state.category,
            "item": state.item,
            "price": state.price,
            "description": state.description

        }

        axios.defaults.withCredentials = true;
        axios.post(API_BASE_URL + 'addFood', payload)
            .then(function (response) {
                console.log(response);
                if (response.status === 200) {
                    setState(prevState => ({
                        ...prevState,
                        'successMessage': 'category and item added  ...'
                    }))
                    // redirectToHome();
                    redirectToMenu();
                    props.showError(null)
                } else {
                    props.showError("Some error ocurred");
                }
            })
            .catch(function (error) {
                console.log(error);
            });


    }

    const redirectToMenu = () => {
        props.updateTitle('Menu')
        props.history.push('/');

    }
    // const redirectToHome = () => {
    //     props.updateTitle('Home')
    //     props.history.push('/Home');
    // }

    // const redirectToLogin = () => {
    //     props.updateTitle('SignIn')
    //     props.history.push('/signin');
    // }


    const handleSubmitClick = (e) => {
        e.preventDefault();

        sendDetailsToServer()

    }



    return (
        <div className="card col-12 col-lg-4  login-card mt-5 hv-center firstDiv" >
            <form>

                <div className="form-group text-left">
                    <label htmlFor="ExampleInputLastname">Category</label>
                    <input type="text"
                        className="form-control"
                        id="category"
                        placeholder="Category"
                        value={state.category}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group text-left">
                    <label htmlFor="ExampleInputFirstname">Item</label>
                    <input type="text"
                        className="form-control"
                        id="item"
                        placeholder="Item"
                        value={state.item}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group text-left">
                    <label htmlFor="ExampleInputFirstname">price</label>
                    <input type="text"
                        className="form-control"
                        id="price"
                        placeholder="Price"
                        value={state.price}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group text-left">
                    <label htmlFor="ExampleInputFirstname">Description</label>
                    <input type="text"
                        className="form-control"
                        id="description"
                        placeholder="Description"
                        value={state.description}
                        onChange={handleChange}
                    />
                </div>

                <button
                    type="submit"
                    className="btn btn-primary"
                    onClick={handleSubmitClick}
                >
                    Add
                </button>


            </form>
            <div className="alert alert-success mt-2" style={{ display: state.successMessage ? 'block' : 'none' }} role="alert">
                {state.successMessage}
            </div>
            {/* <div className="mt-2">
                <span>Already have an account? </span>
                <span className="loginText" onClick={() => redirectToLogin()}>Login here</span> 
            </div> */}
        </div>
    )
}
export default withRouter(AddCategory_Item);