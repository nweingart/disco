import React, { useState, useEffect} from 'react';
import { getTopArtists, getTopTracks } from '../../../spotify/SpotifyAuth';

import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import ArtistCard from '../../../components/common/ArtistsCard';
import TracksCard from '../../../components/common/TracksCard';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    container: {
        display: 'flex',
        justifyContent: 'center',
    },
    heading: {
      marginBottom: '5%',
    },
})

const TasteMediumTerm = () => {
    const classes = useStyles()
    const [topArtists, setTopArtists] = useState(null);
    const [topTracks, setTopTracks] = useState(null);

    useEffect(() => {
        const TopArtists = async () => {
          const { data } = await getTopArtists('medium_term');

          setTopArtists(data.items);
        }

        const TopTracks = async () => {
            const { data } = await getTopTracks('medium_term');

            setTopTracks(data.items)
        }

        TopArtists();
        TopTracks();
  }, [])


// helper functions
  const mostUniqueArtist = []
  const uniqueArtist = topArtists?.reduce(function(a, b) {
    return (a.popularity < b.popularity) ? a : b;
  })

  const mostUniqueTrack = [];
  const uniqueTrack = topTracks?.reduce(function(a, b) {
    return (a.popularity < b.popularity) ? a : b;
    });

  const mostBasicArtist = []
  const basicArtist = topArtists?.reduce(function(a, b) {
    return (a.popularity < b.popularity) ? b : a;
  })

  const mostBasicTrack = []
  const basicTrack = topTracks?.reduce(function(a, b) {
    return (a.popularity < b.popularity) ? b : a;
  })
  



    if (uniqueTrack && uniqueArtist && basicTrack && basicArtist) {
        mostUniqueTrack.push(uniqueTrack)
        mostUniqueArtist.push(uniqueArtist)
        mostBasicArtist.push(basicArtist)
        mostBasicTrack.push(basicTrack)
    }


    return (
      <Box className={classes.container}>
          <Grid container>
            <Grid item lg={6} className={classes.container}>
              {mostUniqueTrack?.map((track) => {
                return (
                  <Grid item>
                    <Typography variant="h5" className={classes.heading}>
                      Last 6 Months' Top Most Unique Track
                    </Typography>
                    <TracksCard name={track.name} artist={track.artists[0].name} cardImageUrl={track.album.images[0].url} dialogueImageUrl={track.album.images[1].url} popularity={track.popularity}/>
                  </Grid>
                );
                })}
                {mostUniqueArtist?.map((artist) => {
                return (
                  <Grid item>
                    <Typography variant="h5" className={classes.heading}>
                      Last 6 Months' Top Most Unique Artist
                    </Typography>
                    <ArtistCard artist={artist.name} popularity={artist.popularity} genres={artist.genres[0]} dialogueImageUrl={artist.images[1].url} cardImageUrl={artist.images[0].url}/>
                  </Grid>
                );
                })}
            </Grid>
            <Grid item lg={6}  className={classes.container}>
            {mostBasicTrack?.map((track) => {
            return (
              <Grid item>
                <Typography variant="h5" className={classes.heading}>
                  Last 6 Months' Top Most Basic Artist
                </Typography>
                <TracksCard name={track.name} artist={track.artists[0].name} cardImageUrl={track.album.images[0].url} dialogueImageUrl={track.album.images[1].url} popularity={track.popularity}/>
              </Grid>
            );
            })}
            {mostBasicArtist?.map((artist) => {
            return (
              <Grid item>
                <Typography variant="h5" className={classes.heading}>
                  Last 6 Months' Top Most Basic Artist
                </Typography>
                <ArtistCard artist={artist.name} popularity={artist.popularity} genres={artist.genres[0]} dialogueImageUrl={artist.images[1].url} cardImageUrl={artist.images[0].url}/>
              </Grid>
            );
            })}
          </Grid>
        </Grid>
      </Box>
  );
};

export default TasteMediumTerm;
