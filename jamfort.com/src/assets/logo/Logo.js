import Typography  from '@material-ui/core/Typography';
import React from 'react';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    logo: {
        color: 'white',
        fontSize: 36,
        fontFamily: 'Georgia',
        fontWeight: 700,
    }
});

const Logo = () => {
    const classes = useStyles();
    return (
        <div>
            <Typography className={classes.logo}>
                JAMFORT
            </Typography>
        </div>
    )
}

export default Logo