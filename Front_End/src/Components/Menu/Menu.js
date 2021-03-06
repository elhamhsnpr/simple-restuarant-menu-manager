import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { API_BASE_URL } from '../../Constants/apiConstans';
import { withRouter } from "react-router-dom";
import Category from '../Category/Category';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';

function Menu(props) {
    const [menuDataState, setMenuDataState] = useState({})

    let categoryElementList = [];

    useEffect(() => {
        const reformatData = (resturantMenuData) => {
            let categoryElementDict = {};
            for (let menuItem of resturantMenuData) {
                let menuItemDict = {}
                menuItemDict['item'] = menuItem.item;
                menuItemDict['price'] = menuItem.price;
                menuItemDict['description'] = menuItem.description;

                if (menuItem.category in categoryElementDict) {
                    categoryElementDict[menuItem.category].push(menuItemDict);
                }
                else {
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
        props.updateTitle('Food Menu');
        loadData();
    }, [])

    for (let category in menuDataState) {
        categoryElementList.push(<Tab eventKey={category} title={category}> <Category key={category} name={category} menu_list={menuDataState[category]} />  </Tab>)
    }

    return (
        <Tabs defaultActiveKey="Main">
            {categoryElementList}
        </Tabs>
    )

}

export default withRouter(Menu);