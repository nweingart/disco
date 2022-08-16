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
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  label: {
    margin: 25,
    fontWeight: "bolder"
  },
  button: {
    backgroundColor: 'black',
    color: 'white',
    borderRadius: 5,
    marginBottom: 25,
    width: '50%',
    "&:hover": {
      backgroundColor: 'blue',
    }
  },
  clearButton: {
    backgroundColor: 'black',
    color: 'white',
    borderRadius: 5,
    marginBottom: 25,
    width: '50%',
    "&:hover": {
      backgroundColor: 'purple',
    }
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


  const filteredRecommendations = recommendations?.filter(track => track.popularity < 60 && track.popularity > 15 && track.preview_url )
  console.log(filteredRecommendations)


  return (
    <Box className={classes.container}>
      <ArtistModal onClick={value => setSelectedArtist(value) } />
      <Typography className={classes.label}>
        { selectedArtist[1] }
      </Typography>
      <TrackModal onClick={value => setSelectedTrack(value) } />
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
      <Button className={[classes.clearButton]} onClick={() => fireClearFunction()}>
        Clear
      </Button>
      <div style={{ padding: 50}}>
        <Typography>
          ***Recommendations tend to work best with artists and tracks from similar genres, but go crazy!
        </Typography>
      </div>
      <Grid container>
        {filteredRecommendations?.map(track => {
          return (
            <Grid item xs={12} sm={6}>
              <TracksCard name={track.name} artist={track.artists[0].name} releaseYear={track.album.release_date.slice(0, 4)} cardImageUrl={track?.album?.images[0].url} popularity={track.popularity} recommendation={true} id={track.id} previewUri={track.preview_url}/>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  )
};

export default Dashboard;




