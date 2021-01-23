import React from 'react';
import { withRouter } from "react-router-dom";
import MenuItem from '../MunuItem/MenuItem';

function Category(props) {
    let menuItemList = []

    for(let menuItem of props.menu_list) 
    {
            menuItemList.push(<MenuItem key={menuItem['item']} item={menuItem['item']} price={menuItem['price']} description={menuItem['description']} />);
    }
   
    return (
        <div>
            <div>{props.name}</div>
            <div>{menuItemList}</div>
        </div>


    )

}
export default withRouter(Category);