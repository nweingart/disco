import React from 'react';
import Button from '@material-ui/core/Button'
import Box from '@material-ui/core/Box'
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    container: {
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: 'black',
    },
    btnContainer: {
        display: 'flex',
        justifyContent: 'center',
        marginTop: '25%',
    },
    btn:{
        backgroundColor: 'green',
    }
    
})

const SignedOut = () => {
    const classes = useStyles()
    return (
        <div className={classes.container}>
            <Box className={classes.btnContainer}>
                <Button variant="contained" href="http://localhost:8888/login" className={classes.btn} >
                    Sign in with your Spotify
                </Button>
            </Box>
        </div>
    );
};

export default SignedOut;




