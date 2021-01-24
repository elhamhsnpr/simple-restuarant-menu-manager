import React from 'react';
import { withRouter } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import foodimage from './../../images/foodimage.png'

function MenuItem(props) {
    return (
        <div>
            

            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={foodimage} />
                <Card.Body>
                    <Card.Title>{props.item}</Card.Title>
                    <Card.Text>
                        {props.description}
                     </Card.Text>
                    {/* <Button variant="primary">Go somewhere</Button> */}
                </Card.Body>
            </Card>
        </div>
    )

}
export default withRouter(MenuItem);