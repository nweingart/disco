import React, { useState, useEffect } from 'react';
import { getTrack } from '../../spotify/SpotifyAuth'
import TracksCard from '../../components/common/TracksCard';
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";

// material ui imports


const SearchTracks = props => {
    const [track, setTrack] = useState('')
    const [searchedTracks, setSearchedTracks] = useState(null)

    console.log(props)


    const handleChange = event => {
      event.preventDefault()
      setTrack(event.target.value)
    }

    useEffect(() => {

          const SearchTrack = async () => {
            const { data } = await getTrack(track)


            setSearchedTracks(data.tracks.items)
          }


          SearchTrack()

    }, [track])

    console.log(searchedTracks)

    return(
        <Container>
          <form noValidate autoComplete="off" >
            <TextField id="outlined-basic" label="Track" variant="outlined" onInput={handleChange} />
          </form>
          <Grid container>
            {searchedTracks?.map((track) => {
              return (
                <Grid item xs={12} sm={6} md={4} lg={3} onClick={(event) => props.onClick(track.id)}>
                  <TracksCard name={track.name} cardImageUrl={track?.album?.images[0].url}/>
                </Grid>
              );
            })}
          </Grid>
        </Container>
    )
};

export default SearchTracks;
