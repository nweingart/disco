import React, {useEffect, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import Grid from "@material-ui/core/Grid";
import TracksCard from "../../components/common/TracksCard";
import {getRecommendedTracks, getTrack} from "../../spotify/SpotifyAuth";

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: 'relative',
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
  button: {
    background: 'green'
  }
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});


const RecommendationsModal = (artist, track, genre) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [recommendations, setRecommendations] = useState(null)

  useEffect(() => {
    if (artist && track && genre) {
      const SearchTrack = async () => {
        const { data } = await getTrack(track)

        setSearchedTracks(data?.tracks?.items)
      }

      SearchTrack()
    }
  }, [artist, genre, track])


  console.log(recommendations)

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen} className={classes.button}>
        Search
      </Button>
      <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
        <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
              <CloseIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              Recommendations
            </Typography>
          </Toolbar>
        </AppBar>
        <Grid container>
          {recommendations?.map(track => {
            return (
              <Grid item xs={12} sm={6} md={4} lg={3} >
                <TracksCard name={track.name} cardImageUrl={track?.album?.images[0].url}/>
              </Grid>
            );
          })}
        </Grid>
      </Dialog>
    </div>
  );
}

export default RecommendationsModal