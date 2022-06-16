import React, { useState } from 'react'
import SearchArtists from "../../search/artists/SearchArtists"
import SearchTracks from "../../search/tracks/SearchTracks"
import {getRecommendedTracks} from "../../spotify/SpotifyAuth";
import Grid from '@material-ui/core/Grid'
import Typography from "@material-ui/core/Typography"
import Button from "@material-ui/core/Button"
import TracksCard from "../../components/common/TracksCard";

const Dashboard = () => {
  const [selectedArtist, setSelectedArtist] = useState('')
  const [selectedTrack, setSelectedTrack] = useState('')
  const [recommendations, setRecommendations] = useState(null)

  const genre = 'rock'

  const RecommendedTracks = async () => {
    const { data } = await getRecommendedTracks(selectedArtist, genre, selectedTrack)
    setRecommendations(data.tracks)
  }

  const handleClick = () => {
    RecommendedTracks()
    console.log(recommendations)
  }

  return (
      <Grid container>
        <Grid item lg={6}>
          <Typography variant="h2">
            {selectedArtist}
          </Typography>
        </Grid>
        <Grid item lg={6}>
          <Typography variant="h2">
            {selectedTrack}
          </Typography>
        </Grid>
        <Grid item lg={6}>
          <SearchArtists onClick={value => setSelectedArtist(value) } />
        </Grid>
        <Grid item lg={6}>
          <SearchTracks onClick={value => setSelectedTrack(value) } />
        </Grid>
        <Grid item>
          <Button onClick={handleClick}>
            Submit
          </Button>
        </Grid>
        <Grid container>
          {recommendations?.map((track) => {
            return (
              <Grid item xs={12} sm={6} md={4} lg={3}>
                <TracksCard name={track.name} cardImageUrl={track?.album?.images[0].url}/>
              </Grid>
            );
          })}
        </Grid>
      </Grid>
  )
};

export default Dashboard;
