import React, { useState, useEffect } from 'react';
import { getArtist } from '../../spotify/SpotifyAuth';
import ArtistsCard from '../../components/common/ArtistsCard';

// material UI imports
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container'
import TextField from '@material-ui/core/TextField'

const SearchArtists = props => {
  const [artist, setArtist] = useState('')
  const [searchedArtists, setSearchedArtists] = useState(null);

  const handleChange = event => {
    event.preventDefault()
    setArtist(event.target.value)
  }

  useEffect(() => {

    const SearchArtist = async () => {
      const { data } = await getArtist(artist)

      setSearchedArtists(data?.artists?.items)
    }

    SearchArtist()

  }, [artist])

  console.log(searchedArtists)

  return(
    <Container>
      <form noValidate autoComplete="off" >
        <TextField id="outlined-basic" label="Artist" variant="outlined" onInput={handleChange} />
      </form>
      <Grid container>
        {searchedArtists?.map((artist) => {
          return (
            <Grid item xs={12} sm={6} md={4} lg={3} onClick={(event) => props.onClick(artist.id) }>
              <ArtistsCard artist={artist.name} cardImageUrl={artist?.images[0]?.url} popularity={artist.popularity}/>
            </Grid>
          );
        })}
      </Grid>
    </Container>

  );
};

export default SearchArtists;