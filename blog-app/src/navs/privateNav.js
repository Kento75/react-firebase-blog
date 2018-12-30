
import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import PropTypes from "prop-types";
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import LibraryAddIcon from '@material-ui/icons/LibraryAdd';
import {NavLink} from 'react-router-dom';

export const publicNavs = [
  {
    url:'/adminPosts',
    name:'AdminPosts',
    icon:<LibraryBooksIcon/>
  },
  {
    url:'/createPost',
    name:'CreatePost',
    icon:<LibraryAddIcon/>
  },
];

export default () => (
  publicNavs.map((navItem) => {
    return <NavLink to={navItem.url} className="NavLinkItem" key={navItem.url} activeClassName="NavLinkItem-selected">
             <List component="nav">
               <ListItem button>
                 <ListItemIcon className="innernavitem"> 
                   {navItem.icon}
                 </ListItemIcon>
                 <ListItemText primary={navItem.name} className="innernavitem" color="black"/>
               </ListItem>
             </List>
           </NavLink>
  })
);
