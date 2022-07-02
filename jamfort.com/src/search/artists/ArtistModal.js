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
import ArtistsCard from "../../components/common/ArtistsCard";
import { getArtist } from "../../spotify/SpotifyAuth";

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
  },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});



const ArtistModal = props => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [artist, setArtist] = useState('')
  const [searchedArtists, setSearchedArtists] = useState(null)
  const [selected, setSelected] = useState(null)

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

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

  console.log(selected)

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen} className={classes.button}>
        Select Artist
      </Button>
      <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
        <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
              <CloseIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              Search for an Artist
            </Typography>
            <Button autoFocus color="inherit" onClick={handleClose}>
              save
            </Button>
          </Toolbar>
        </AppBar>
        <form noValidate autoComplete="off" >
          <TextField id="outlined-basic" label="Artist" variant="outlined" onInput={handleChange} />
        </form>
        <Grid container>
          {searchedArtists?.map((artist, index) => {
            return (
              <Grid item xs={12} sm={6} md={4} lg={3} onClick={(event) =>  props.onClick([artist.id, artist.name, artist.popularity])}>
                <div key={index}>
                  <ArtistsCard key={index} artist={artist.name} cardImageUrl={artist?.images[0]?.url} popularity={artist.popularity} selected={selected} />
                </div>
              </Grid>
            );
          })}
        </Grid>
      </Dialog>
    </div>
  );
}

export default ArtistModal