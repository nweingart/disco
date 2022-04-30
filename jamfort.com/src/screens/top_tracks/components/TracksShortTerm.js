import React, { useState, useEffect } from 'react';
import { getTopTracks } from '../../../spotify/SpotifyAuth'
import TracksCard from '../../../components/common/TracksCard';
import { Container, Typography, Grid } from '@material-ui/core';


// material ui imports


const TracksShortTerm = () => {
    const [topTracks, setTopTracks] = useState(null);

    useEffect(() => {
          const TopTracks = async () => {
            const { data } = await getTopTracks('short_term');

            setTopTracks(data.items);
          }

          TopTracks();
    }, [])

    console.log(topTracks)

    return(
      <>
          <Container>
            <Typography variant="h4">
              Last Month's Top Tracks
            </Typography>
          </Container>
          <Grid container>
            {topTracks?.map((track) => {
              return (
                <Grid item xs={12} md={4} lg={3}>
                  <TracksCard name={track.name} artist={track.artists[0].name} cardImageUrl={track.album.images[0].url} dialogueImageUrl={track.album.images[1].url} popularity={track.popularity}/>
                </Grid>
              );
              })}
          </Grid>
      </>
    )
};

export default TracksShortTerm;;