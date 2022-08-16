import React from 'react';

// material ui imports
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles } from '@material-ui/core';
import Logo from '../../../assets/logo/Logo';

const useStyles = makeStyles(({
    navBar: {
        backgroundColor: 'black',
    },
    logo: {
        flexGrow: "1",
        cursor: "pointer",
    },
}));

const NavbarSO = () => {
    const classes = useStyles();
    return (
        <AppBar position="static" className={classes.navBar}>
            <Toolbar>
                <Logo />
            </Toolbar>
        </AppBar>
    );
};
export default NavbarSO;
