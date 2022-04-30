import React, { useState, useEffect } from 'react';
import Box  from '@material-ui/core/Box';
import Typography  from '@material-ui/core/Typography';
import { getUserSavedTracks } from '../../spotify/SpotifyAuth';

const Social = () => {
    const [savedTracks, setSavedTracks] = useState(null);

    useEffect(() => {
        const SavedTracks = async () => {
            const { data } = await getUserSavedTracks('long_term');

            setSavedTracks(data.items);

        }
        SavedTracks();
    }, [])

    console.log(savedTracks)

    return (
        <Box>
            <Typography>
                Coming Soon!
            </Typography>
        </Box>
    )
;}

export default Social;
