import React, {useEffect, useState} from 'react'
import  { getRecommendedTracks } from "../../spotify/SpotifyAuth"
import Box from '@material-ui/core/Box'
import ArtistModal from "../../search/artists/ArtistModal"
import TrackModal from "../../search/tracks/TrackModal"
import Typography from "@material-ui/core/Typography"
import GenresModal from "../../search/genres/GenresModal"
import { makeStyles } from "@material-ui/core"
import Button from "@material-ui/core/Button"
import Grid from "@material-ui/core/Grid";
import TracksCard from "../../components/common/TracksCard";

const useStyles = makeStyles({
  label: {
    margin: 25,
  },
  button: {
    backgroundColor: 'green',
    borderRadius: 5,
    marginBottom: 25,
  },
  clearButton: {
    marginLeft: 10
  }
})

const Dashboard = () => {
  const [selectedArtist, setSelectedArtist] = useState([])
  const [selectedTrack, setSelectedTrack] = useState([])
  const [selectedGenre, setSelectedGenre] = useState('')
  const [recommendations, setRecommendations] = useState(null)

  const classes = useStyles()


  const getRecommendations = async (artist, genre, track) => {
      const { data } = await getRecommendedTracks(artist, genre, track)

      setRecommendations(data?.tracks)

    }


  const fireClearFunction = () => {
    setSelectedArtist([])
    setSelectedGenre('')
    setSelectedTrack([])
    setRecommendations(null)
  }


  const filteredRecommendations = recommendations?.filter(track => track.popularity < 70 && track.popularity > 25)
  const sortedRecommendations = filteredRecommendations?.sort((a,b) => (a.popularity < b.popularity) ? 1 : (a.popularity < b.popularity) ? -1 : 0)
  const finalRecommendations = sortedRecommendations?.keys()
  console.log(finalRecommendations)


  return (
    <Box>
      <ArtistModal onClick={value => setSelectedArtist(value) } />
      <Typography className={classes.label}>
        { selectedArtist[1] }
      </Typography>
      <TrackModal onClick={value => setSelectedTrack( value) } />
      <Typography className={classes.label}>
        { selectedTrack[1] }
      </Typography>
      <GenresModal onClick={value => setSelectedGenre(value)} />
      <Typography className={classes.label}>
        { selectedGenre }
      </Typography>
      <Button className={classes.button} onClick={() => getRecommendations(selectedArtist[0], selectedGenre, selectedTrack[0])}>
        Get Recommendations
      </Button>
      <Button className={[classes.button, classes.clearButton]} onClick={() => fireClearFunction()}>
        Clear
      </Button>
      <Grid container>
        {sortedRecommendations?.map(track => {
          return (
            <Grid item xs={12} sm={6}>
              <TracksCard name={track.name} cardImageUrl={track?.album?.images[0].url} popularity={track.popularity} recommendation={true} id={track.id}/>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  )
};

export default Dashboard;




