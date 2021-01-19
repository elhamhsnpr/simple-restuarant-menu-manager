import React, { useState } from 'react';
import axios from 'axios';
import { API_BASE_URL } from '../../Constants/apiConstans';
import { withRouter } from "react-router-dom";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';

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
                   
                    props.showError(null)
                } else {
                    props.showError("Some error ocurred");
                }
            })
            .catch(function (error) {
                console.log(error);
            });


    }

    const handleSubmitClick = (e) => {
        e.preventDefault();

        sendDetailsToServer()

    }



    return (


        <Form>
            <Form.Group >
                <Form.Label>Category</Form.Label>
                <InputGroup>
                    <Form.Control
                        type="text"
                        id="category"
                        placeholder="Category"
                        aria-describedby="inputGroupPrepend"
                        required
                        value={state.Category}
                        onChange={handleChange}
                    />
                </InputGroup>
            </Form.Group>

            <Form.Group >
                <Form.Label>Item</Form.Label>
                <Form.Control
                    type="text"
                    id="item"
                    placeholder="Item"
                    aria-describedby="inputGroupPrepend"
                    required
                    value={state.item}
                    onChange={handleChange}
                />
            </Form.Group>
            <Form.Group >
                <Form.Label>Price</Form.Label>
                <Form.Control
                    type="text"
                    id="price"
                    placeholder="Price"
                    aria-describedby="inputGroupPrepend"
                    required
                    value={state.price}
                    onChange={handleChange}
                />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label>Description</Form.Label>
                <Form.Control
                    as="textarea"
                    rows={3}
                    id="description"
                    aria-describedby="inputGroupPrepend"
                    required
                    value={state.description}
                    onChange={handleChange}
                />

            </Form.Group>
            <Button variant="primary" type="submit" onClick={handleSubmitClick}>
                Add
  </Button>
            <div className="alert alert-success mt-1" style={{ display: state.successMessage ? 'block' : 'none' }} role="alert">
                {state.successMessage}
            </div>
        </Form>




    )
}
export default withRouter(AddCategory_Item);