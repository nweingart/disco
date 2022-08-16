import React, { useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid'
import { getGenres } from "../../spotify/SpotifyAuth";
import Typography from "@material-ui/core/Typography";

const SearchGenre = props => {
  const [genres, setGenres] = useState('')

  useEffect(() => {

    const SearchGenres = async () => {
      const { data } = await getGenres()
      setGenres(data.genres)

    }

    SearchGenres()

  }, [])


  console.log(genres)

  return(
    <Grid container>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Typography>{genres}</Typography>
        </Grid>
    </Grid>
  )
};

export default SearchGenre;

/*


 */