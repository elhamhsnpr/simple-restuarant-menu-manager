import React, { useState } from 'react';
import axios from 'axios';
import { API_BASE_URL } from '../../Constants/apiConstans';
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