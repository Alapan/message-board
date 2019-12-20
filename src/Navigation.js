import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const Navigation = () => {
    return (
        <div>
            <List component="nav" aria-label="channels">
                <ListItem button component="a" href="1">
                    <ListItemText primary="Channel 1" />
                </ListItem>
                <ListItem button component="a" href="2">
                    <ListItemText primary="Channel 2" />
                </ListItem>
                <ListItem button component="a" href="3">
                    <ListItemText primary="Channel 3" />
                </ListItem>
            </List>
        </div>
    );
}

export default Navigation;
