import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { API_BASE_URL } from '../../Constants/apiConstans';
import { withRouter } from "react-router-dom";
import Category from '../Category/Category';

function Menu(props) {
    const [menuDataState, setMenuDataState] = useState({})

    let categoryElementList = [];

    useEffect(() => {
        loadData();
      }, [])
    
    const reformatData=(resturantMenuData)=>{
        let categoryElementDict = {};
        for (let menuItem of resturantMenuData)
        {
            let menuItemDict = {}
            menuItemDict['item'] = menuItem.item;
            menuItemDict['price'] = menuItem.price;
            menuItemDict['description'] = menuItem.description;

            if (menuItem.category in categoryElementDict)
            {
                categoryElementDict[menuItem.category].push(menuItemDict);
            }
            else
            {
                categoryElementDict[menuItem.category] = [];
                categoryElementDict[menuItem.category].push(menuItemDict);
            }
        }
    
        setMenuDataState(categoryElementDict);
    }

    const loadData = () => {
        axios.defaults.withCredentials = true;
        axios.get(API_BASE_URL + 'menu')
            .then(function (response) {
                reformatData(response.data);
            })
            .catch(function (error) {
                console.log(error);
    
            });
    }

    for (let category in menuDataState){
        categoryElementList.push(<Category name={category} menu_list={menuDataState[category]} />)
    }

    return (
        <div>
            {categoryElementList}
        </div>
    )

}

export default withRouter(Menu);