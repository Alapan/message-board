import React from 'react';
import Navigation from './Navigation';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Channel from './Channel';
import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyles = makeStyles(({spacing}) => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        marginTop: spacing(5)
    }
}));

function App() {
    const classes = useStyles();
    return (
        <div className={classes.container}>
            <Router>
                <Route exact path='/' component={Navigation} />
                <Route path='/:id' component={Channel} />
            </Router>
        </div>
    );
}

export default App;
