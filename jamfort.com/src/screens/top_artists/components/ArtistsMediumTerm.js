import React, { useState, useEffect } from 'react';
import { getTopArtists } from '../../../spotify/SpotifyAuth';
import ArtistsCard from '../../../components/common/ArtistsCard';

// material UI imports
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const ArtistsMediumTerm = () => {
    const [topArtists, setTopArtists] = useState(null);

    useEffect(() => {
        const TopArtists = async () => {
            const { data } = await getTopArtists('medium_term');

            setTopArtists(data.items);

        }
        TopArtists();
    }, [])

    console.log(topArtists)

    return(
        <>
          <Container>
            <Typography variant="h4">
              Last 6 Months' Top Artists
            </Typography>
          </Container>
          <Grid container>
            {topArtists?.map((artist) => {
              return (
                <Grid item xs={12} md={4} lg={3}>
                  <ArtistsCard artist={artist.name} popularity={artist.popularity} genres={artist.genres[0]} dialogueImageUrl={artist.images[1].url} cardImageUrl={artist.images[0].url}/>
                </Grid>
              );
              })}
          </Grid>
        </>
      );
};

export default ArtistsMediumTerm;
