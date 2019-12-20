import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import PropTypes from 'prop-types';
import axiosInstance from './axios';
import makeStyles from '@material-ui/core/styles/makeStyles';


const useStyles = makeStyles(({spacing}) => ({
    button: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        marginTop: spacing(5)
    }
}));

const Channel = props => {
    const { id } = props.match.params;
    const [ message, setMessage ] = useState('');
    const [ allMessages, setAllMessages ] = useState([]); 
    const [ isDisabled, setIsDisabled] = useState(true);
    const classes = useStyles();

    const onSubmit = (e) => {
        e.preventDefault();
        axiosInstance.post(`/${id}`, {
            message
        })
        .then((response) => {
            // Clear messages, disable submit, set and render all
            // messages
            setMessage('');
            setIsDisabled(true);
            setAllMessages(response.data.messages);
        })
        .catch((error) => {
            console.error(error);
        });
    }

    const onChange = (e) => {
        const value = e.target.value;
        // Disable button if input is empty
        if (value === '') {
            setIsDisabled(true);
        } else {
            setIsDisabled(false);
        }
        setMessage(value);
    }

    useEffect(() => {
        axiosInstance.get(`/messages/${id}`)
        .then((response) => {
            const allMessages = response.data.messages;
            setAllMessages(allMessages);
        })
        .catch((error) => {
            console.error(error);
        });
    }, []);

    return (
        <div>
            <section>
                <h3>Messages for channel {id}</h3>
                {allMessages.map( (message, i) => {
                    return <p key={i}>{message}</p>;
                })}
            </section>
            <form onSubmit={onSubmit} noValidate autoComplete='off'>
                <TextField
                    type='text'
                    label='Message'
                    placeholder='Type your message here'
                    value={message}
                    onChange={onChange}    
                />
                <Button
                    variant='contained'
                    color='primary'
                    type='submit'
                    disabled={isDisabled}
                    className={classes.button}
                >
                    Submit
                </Button>
            </form>
        </div>
    );
};

Channel.propTypes = {
    match: PropTypes.shape({
        id: PropTypes.number
    })
};

export default Channel;
