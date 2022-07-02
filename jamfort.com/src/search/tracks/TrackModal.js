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
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import { getTrack } from "../../spotify/SpotifyAuth";
import TracksCard from "../../components/common/TracksCard";

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: 'relative',
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
  button: {
    background: 'green',
    borderRadius: 5,
  }
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});


const TrackModal = props => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [track, setTrack] = useState('')
  const [searchedTracks, setSearchedTracks] = useState(null)

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = event => {
    event.preventDefault()
    setTrack(event.target.value)
  }

  useEffect(() => {

    const SearchTrack = async () => {
      const { data } = await getTrack(track)

      setSearchedTracks(data?.tracks?.items)
    }

    SearchTrack()

  }, [track])

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen} className={classes.button}>
        Select Track
      </Button>
      <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
        <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
              <CloseIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              Search for a Track
            </Typography>
            <Button autoFocus color="inherit" onClick={handleClose}>
              save
            </Button>
          </Toolbar>
        </AppBar>
        <form noValidate autoComplete="off" >
          <TextField id="outlined-basic" label="Track" variant="outlined" onInput={handleChange} />
        </form>
        <Grid container>
          {searchedTracks?.map(track => {
            return (
              <Grid item xs={12} sm={6} md={4} lg={3} onClick={(event) => props.onClick([track.id, track.name, track.popularity ])}>
                <TracksCard name={track.name} cardImageUrl={track?.album?.images[0].url} id={track.id} recommendation={false} />
              </Grid>
            );
          })}
        </Grid>
      </Dialog>
    </div>
  );
}

export default TrackModal