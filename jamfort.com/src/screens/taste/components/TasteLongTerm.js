import React, { useState, useEffect} from 'react';
import { getTopArtists, getTopTracks } from '../../../spotify/SpotifyAuth';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core';


import TasteCard from '../../../components/common/TasteCard';


const useStyles = makeStyles({
    container: {
        display: 'flex',
        justifyContent: 'center',
    },
    heading: {
      marginBottom: '5%',
    },
})

const TasteLongTerm = () => {
    const classes = useStyles()
    const [topArtists, setTopArtists] = useState(null);
    const [topTracks, setTopTracks] = useState(null);

    useEffect(() => {
        const TopArtists = async () => {
          const { data } = await getTopArtists('long_term');

          setTopArtists(data.items);
        }

        const TopTracks = async () => {
            const { data } = await getTopTracks('long_term');

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
     <Container>
       <Grid container>
         <Grid item xs={12} lg={6}>
           <TasteCard name={mostUniqueTrack[0].name} popularity={mostUniqueTrack[0].popularity} image={mostUniqueTrack[0].album?.images[0].url} />
         </Grid>
         <Grid item xs={12} lg={6}> 
           <TasteCard name={mostUniqueArtist[0].name} popularity={mostUniqueArtist[0].popularity} image={mostUniqueArtist[0].images[0].url}/>
         </Grid>
         <Grid item xs={12} lg={6}>
          <TasteCard name={mostBasicTrack[0].popularity} image={mostBasicTrack[0].album.images[0].url}/>
         </Grid>
         <Grid item xs={12} lg={6}>
          <TasteCard name={mostBasicArtist[0].name} popularity={mostBasicArtist[0].popularity} image={mostBasicArtist[0].images[0].url}/>
         </Grid>
       </Grid>

     </Container>
  );
};

export default TasteLongTerm;
