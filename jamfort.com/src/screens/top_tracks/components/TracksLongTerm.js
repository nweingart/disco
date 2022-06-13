import React, { useState, useEffect } from 'react';
import { getRecommendedTracks, getTrack } from '../../../spotify/SpotifyAuth'
import TracksCard from '../../../components/common/TracksCard';
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

// material ui imports


const TracksLongTerm = () => {
    const [recommendedTracks, setRecommendedTracks] = useState(null)
    const [track, setTrack] = useState(null)


    const artist = '4oUHIQIBe0LHzYfvXNW4QM'
    const genre = 'country'


    useEffect(() => {

          const Track = async () => {
            const { data } = await getTrack('Chasing', 'You')


            setTrack(data.tracks)
          }

          const Recommendations = async () => {
            const { data } = await getRecommendedTracks({ artist, genre, track })

            setRecommendedTracks(data.tracks)
          }

          Recommendations()
          Track()

    }, [])

    console.log(recommendedTracks)
    console.log(track)


    return(
      <>
          <Container>
            <Typography variant="h4">
              Last Month's Top Tracks
            </Typography>
          </Container>
          <Grid container>
            {recommendedTracks?.map((track) => {
              return (
                <Grid item xs={12} md={4} lg={3}>
                  <TracksCard name={track.name} popularity={track.popularity}/>
                </Grid>
              );
              })}
          </Grid>
      </>
    )
};

export default TracksLongTerm;