import React, { useState, useEffect } from 'react';
import { getTopArtists } from '../../../spotify/SpotifyAuth';
import ArtistsCard from '../../../components/common/ArtistsCard';

// material UI imports
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';

const ArtistsLongTerm = () => {
    const [topArtists, setTopArtists] = useState(null);

    useEffect(() => {
        const TopArtists = async () => {
            const { data } = await getTopArtists('long_term');

            setTopArtists(data.items);

        }
        TopArtists();
    }, [])

    const allScores = topArtists?.map((artist => artist.popularity))

    console.log(allScores)
    const maxScores = [99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99]

    // fibonacci weights
    const weights = [6765, 4181, 2584, 1597, 987, 610, 377, 233, 144, 89, 55, 34, 21, 13, 8, 5, 3, 2, 1, 0.5]

    // two potential scores
    // const weightScore = allScores * weights
    //const maxWeightScore = maxScores * weights

    // dot product function
    const dot = (a, b) => a?.map((x, i) => a[i] * b[i])?.reduce((m, n) => m + n)


    const weightScore = dot(allScores, weights)
    const maxWeightScore = dot(maxScores, weights)

    const aggregateScore = ((1 - (weightScore / maxWeightScore)) * 100).toFixed(2)


    return(
        <Grid container>
            <Box>
                {`Your music taste is ${aggregateScore}% unique`}
            </Box>
          {topArtists?.map((artist) => {
            return (
              <Grid item xs={12} sm={6} md={4} lg={3}>
                <ArtistsCard artist={artist.name} popularity={artist.popularity} genres={artist.genres[0]} dialogueImageUrl={artist.images[1].url} cardImageUrl={artist.images[0].url}/>
              </Grid>
            );
            })}
        </Grid>
      );
};

export default ArtistsLongTerm;