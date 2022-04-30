import React, { useState } from 'react';
import ArtistsLongTerm from '../components/ArtistsLongTerm';
import ArtistsMediumTerm from '../components/ArtistsMediumTerm';
import ArtistsShortTerm from '../components/ArtistsShortTerm';
import Box from '@material-ui/core/Box';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    form: {
        marginBottom: '5%',
    }
})

const TopArtists = () => {
    const [time, setTime] = useState('short');
    const classes = useStyles();

    const handleChange = (event) => {
        setTime(event.target.value);
    }

    return (
        <Container className={classes.container}>
            <Box sx={{ maxWidth: 200 }} className={classes.form}>
                <FormControl fullWidth>
                    <InputLabel id="time-period-select-label">Time Period</InputLabel>
                    <Select
                    labelId="time-period-select-label"
                    id="time-select"
                    value={time}
                    label="time"
                    onChange={handleChange}
                    >
                        <MenuItem value={'short'}>Last Month</MenuItem>
                        <MenuItem value={'medium'}>Last 6 Months</MenuItem>
                        <MenuItem value={'long'}>All Time</MenuItem>
                    </Select>
                </FormControl>
            </Box>
            <Box>
                {time === 'short' ?
                (<ArtistsShortTerm />) : time === 'medium' ?
                    (<ArtistsMediumTerm />) : 
                    (<ArtistsLongTerm />)
                }
            </Box>
        </Container>
    );
};

export default TopArtists;
