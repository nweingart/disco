import React, { useState } from 'react';
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
import GenreCard from '../../components/common/GenreCard'

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: 'relative',
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
  button: {
    background: 'black',
    color: 'white',
    "&:hover": {
      backgroundColor: 'green',
      color: 'white',
    }
  }
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});


const GenresModal = props => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  const genres = [
    { name: 'acoustic' },
    { name: 'chill' },
    { name: 'classical' },
    { name: 'country' },
    { name: 'edm' },
    { name: 'folk' },
    { name: 'hip-hop'},
    { name: 'house'},
    { name: 'indie'},
    { name: 'jazz' },
    { name: 'k-pop' },
    { name: 'metal' },
    { name: 'pop' },
    { name: 'punk' },
    { name: 'r-n-b' },
    { name: 'rock-n-roll'},
  ]

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen} className={classes.button}>
        Select Genre
      </Button>
      <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
        <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
              <CloseIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              Select a Genre
            </Typography>
            <Button autoFocus color="inherit" onClick={handleClose}>
              save
            </Button>
          </Toolbar>
        </AppBar>
        <Grid container>
          {genres?.map(genre => {
            return (
              <Grid item xs={12} sm={6} md={4} lg={3} onClick={(event) => props.onClick(genre.name) }>
                <GenreCard genre={genre.name} />
              </Grid>
            );
          })}
        </Grid>
      </Dialog>
    </div>
  );
}

export default GenresModal