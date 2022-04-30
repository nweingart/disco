import React from 'react';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    container: {
        backgroundColor: 'black',
        color: 'white',
        height: 200,
        marginTop: '-10%',
    },
    linkContainer: {
        marginTop: '10%',
    },
    link: {
        fontFamily: 'Georgia',
    }
})

const Footer = () => {
    const classes = useStyles();
    return (
        <Box className={classes.container} px={{ xs: 5, sm: 20}} py={{xs: 5, sm: 20}}>
            <Container className={classes.linkContainer}>
                <Grid container>
                    <Grid item xs={12} sm={4}>
                        <Box borderBottom={1}></Box>
                        <Box>
                            <Typography className={classes.link}>
                                About
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Box borderBottom={1}></Box>
                        <Box>
                            <Typography className={classes.link}>
                                Privacy Policy
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Box borderBottom={1}></Box>
                        <Box>
                            <Typography className={classes.link}>
                                Ode to Spotify
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default Footer;
