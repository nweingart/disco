import React from 'react';
import Container from '@material-ui/core/Container';
import Logo from '../../assets/logo/Logo';
import Button from '@material-ui/core/Button'
import Box from '@material-ui/core/Box'
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    container: {
        display: 'flex',
        justifyContent: 'center',
    },
    btnContainer: {
        display: 'flex',
        justifyContent: 'center',
    },
    btn:{
        backgroundColor: 'green',
    }
    
})

const SignedOut = () => {
    const classes = useStyles()
    return (
        <Container className={classes.container}>
            <Logo />
            <Box className={classes.btnContainer}>
                <Button variant="contained" href="http://localhost:8888/login" className={classes.btn} >
                    Connect your Spotify
                </Button>
            </Box>
        </Container>
    );
};

export default SignedOut;




