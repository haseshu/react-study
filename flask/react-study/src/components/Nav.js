import React from 'react';
import PropTypes from 'prop-types';
import { Route, Link } from 'react-router-dom';
import {List, ListItem, ListItemText} from '@material-ui/core/';
import { Drawer } from '@material-ui/core';

export default function Nav({categories, onClick}){
    const to = category =>(
        category.id ==='1'
        ?'/all'
        :"/category/" + category.id
    );
/*
    return(
        <ul>
            {categories.map(category =>(
                <li key={"nav-item-"+ category.id }>
                    <Link to={to(category)}>
                        {category.name}
                    </Link>
                </li>
            ))}
        </ul>
    );
    */
   return(
       <Drawer variant="permanent">
           <List style={{width:240}}>
               {categories.map(category =>(
                <ListItem
                button
                key={'menu-tem-'+category.id}
                onClick={() => onClick(to(category))}
                >
                    <ListItemText primary={category.name} />
                </ListItem>
                ))}
            </List >
       </Drawer>
   )
}

Nav.prototype ={
    categories:PropTypes.arrayOf(
        PropTypes.shape({
            id:PropTypes.string.isRequired,
            name:PropTypes.string.isRequired
        })
    ).isRequired,
    onClick:PropTypes.func.isRequired
};