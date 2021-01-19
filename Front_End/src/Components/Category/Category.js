import React from 'react';
import { withRouter } from "react-router-dom";
import MenuItem from '../MunuItem/MenuItem';
import CardDeck from 'react-bootstrap/CardDeck';


function Category(props) {
    let menuItemList = []

    for(let menuItem of props.menu_list) 
    {
            menuItemList.push(<MenuItem key={menuItem['item']} item={menuItem['item']} price={menuItem['price']} description={menuItem['description']} />);
    }
   
    return (
        <CardDeck>{menuItemList}</CardDeck>
    )

}
export default withRouter(Category);