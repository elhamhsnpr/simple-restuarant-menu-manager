import React from 'react';
import { withRouter } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import foodimage from './../../images/foodimage.png';

function MenuItem(props) {
    return (
        <div >
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={foodimage} />
                <Card.Body>
                    <Card.Title>{props.item}</Card.Title>
                    <Card.Text>
                        {props.description}
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted">{props.price}</small>
                </Card.Footer>
            </Card>
        </div>
    )

}
export default withRouter(MenuItem);