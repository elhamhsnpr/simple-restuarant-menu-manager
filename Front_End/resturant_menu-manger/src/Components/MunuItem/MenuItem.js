import React from 'react';
import { withRouter } from "react-router-dom";

function MenuItem(props) {
    return(
        <div>
            <div>{props.item}</div>
            <div>{props.price}</div>
            <div>{props.description}</div>
        </div>
    )
    
}
export default withRouter(MenuItem);