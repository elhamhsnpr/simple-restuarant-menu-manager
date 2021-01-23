import React, { useState } from 'react';
import axios from 'axios';
import { API_BASE_URL } from '../../Constants/apiConstans';
import { withRouter } from "react-router-dom";
import MenuItem from '../MunuItem/MenuItem';

function Category(props) {
    let menuItemList = []

    console.log(props.menu_list);
    for(let menuItem of props.menu_list) 
    {
            menuItemList.push(<MenuItem item={menuItem['item']} price={menuItem['price']} description={menuItem['description']} />);
    }
   
    return (
        <div>
            <div>{props.name}</div>
            <div>{menuItemList}</div>
        </div>


    )

}
export default withRouter(Category);