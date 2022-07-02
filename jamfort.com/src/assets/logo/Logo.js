import React from 'react';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box'
import { makeStyles, Typography } from '@material-ui/core';
import LogoIcon from './logo_icon.png';

const useStyles = makeStyles({
    logoContainer: {
        position: 'absolute',
        backgroundColor: 'green',
        top: 0,
        left: 0,
    },
    logoIcon: {
        height: 25,
        display: 'inline'
    },
    logoText: {
        display: 'inline'
    }
});

const Logo = () => {
    const classes = useStyles();
    return (
        <Container>
            <Box className={classes.logoContainer}>
                <Box
                    className={classes.logoIcon}
                    component="img"
                    alt=""
                    src={LogoIcon}
                >
                </Box>
                <Typography className={classes.logoText}>
                    Spotify TasteTracker
                </Typography>
            </Box>
        </Container>
    )
}

export default Logo