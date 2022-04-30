import React, { useState } from 'react';

// material imports 
import Box from '@material-ui/core/Box'
import { makeStyles } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';

// component imports
import TasteShortTerm from '../components/TasteShortTerm';
import TasteMediumTerm from '../components/TasteMediumTerm';
import TasteLongTerm from '../components/TasteLongTerm';



const useStyles = makeStyles({
    form: {
        marginBottom: '5%',
    }

})

const Taste = () => {
    const [time, setTime] = useState()
    const classes = useStyles()

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
                (<TasteShortTerm />) : time === 'medium' ?
                    (<TasteMediumTerm />) : 
                    (<TasteLongTerm />)
                }
            </Box>
        </Container>
        
    );
};

export default Taste;

/*


const mostUniqueArtist = topArtists.reduce(function(res, obj) {
    return (obj.popularity < res.popularity) ? obj : res;
});

console.log(mostUniqueArtist);


const mostBasicArtist = topArtists.reduce(function(res, obj) {
    return (obj.popularity < res.popularity) ? res: obj;
});

console.log(mostBasicArtist);

const mostUniqueTrack = topTracks.reduce(function(res, obj) {
    return (obj.popularity < res.popularity) ? obj : res;
});

console.log(mostUniqueTrack);


const mostBasicTrack = topTracks.reduce(function(res, obj) {
    return (obj.popularity < res.popularity) ? res: obj;
});

console.log(mostBasicTrack);

time === 'short' ?
                (<ArtistsShortTerm />) : time === 'medium' ?
                    (<ArtistsMediumTerm />) : 
                    (<ArtistsLongTerm />)
                }



*/