import React from 'react';

// material ui imports
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
//import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box'
import { Avatar, makeStyles } from '@material-ui/core';

// component imports
import Logo from '../../../assets/logo/Logo';

// react router dom imports
import { Link } from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
    container: {
        display: 'flex',
        justifyContent: 'center',
        position: 'absolute',
        width: '100%',
        height: 50,
        zIndex: 10,
    },
    brandContainer: {
        position: 'absolute',
        height: '100%',
        width: '20%',
        top: 0,
        left: 0,
        zIndex: 100,
    },
    linkContainer: {
        position: 'absolute',
        display: 'flex',
        justifyContent: 'center',
        height: '100%',
        width: '20%',
        top: 0,
        left: '60%',
        zIndex: 100,
    },
    aviContainer: {
        position: 'absolute',
        display: 'flex',
        justifyContent: 'center',
        height: '100%',
        width: '20%',
        top: 0,
        left: '85%',
        zIndex: 100,
    },
    avi: {
        marginTop: 5,
    },
    link: {
        margin: 20,
        color: 'white',
        fontFamily: 'sans-serif',
        textDecoration: 'none',
        fontSize: 18,
        fontWeight: 600,
    }
}));

const Navbar = ({ account }) => {
    const classes = useStyles();
    const profilePic = account?.images[0]?.url
    return (
        <AppBar position="static" style={{ marginBottom: 25, backgroundColor: 'black'}}>
            <Toolbar>
                <Box className={classes.container}>
                    <Box className={classes.brandContainer}>
                        <Logo />
                    </Box>
                    <Box className={classes.aviContainer}>
                        <Avatar src={profilePic} className={classes.avi}/>
                    </Box>
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
