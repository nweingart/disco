import React from 'react';
import NavbarSO from '../../components/global/navbar/NavbarSO';
import Footer from '../../components/global/footer/Footer';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core';

import SheetMusic from '../../assets/img/sheetmusic.jpg'

const useStyles = makeStyles({
    heroImg: {
        height: 700,
        width: '100vw',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        position: 'relative',
    },
    btnContainer: {
        display: 'flex',
        justifyContent: 'center',
        position: 'relative',
    },
    btn: {
        backgroundColor: 'black',
        color: 'white',
        height: 100,
        width: 250,
        zIndex: 100,
        position: 'absolute',
        top: -200,
        borderRadius: 20,
        fontFamily: 'Georgia',
    },
})

const SignedOut = () => {
    const classes = useStyles()
    return (
        <>
            <NavbarSO />
            <Box>
                <Box 
                    component="img"
                    alt="cover"
                    src={SheetMusic}
                    className={classes.heroImg}
                />
            </Box>
            <Box className={classes.btnContainer}>
                <Button variant="contained" href="http://localhost:8888/login" className={classes.btn} >
                        Connect your Spotify
                </Button> 
            </Box>
            <Footer />
        </>
    );
};

export default SignedOut;

/*

<Box>
                       
                </Box>

*/