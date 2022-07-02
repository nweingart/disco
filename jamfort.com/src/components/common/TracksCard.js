import React from 'react';
import { makeStyles } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import { saveTrack, removeTrack } from "../../spotify/SpotifyAuth";
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button'

const useStyles = makeStyles({
    root: {
      height: '70%',
      maxWidth: 500,
      marginBottom: '15%'
    },
    media: {
      height: 700,
    },
  });
  

const TracksCard = ({ name, artist, cardImageUrl, popularity, id, recommendation }) => {
    const classes = useStyles()


    const SaveTheTrack = id => {
      saveTrack(id)
    }

    const RemoveTheTrack = id => {
      removeTrack(id)
    }


    return (
    <Container>
        <Card className={classes.root}>
            <CardActionArea>
                <Typography>
                    {name}            {popularity}
                </Typography>
                <CardMedia
                    className={classes.media}
                    image={cardImageUrl}
                    title={artist}
                />
              <Button onClick={ recommendation ? () => SaveTheTrack(id) : null }>
                +
              </Button>
              <Button onClick={ recommendation ? () => RemoveTheTrack(id) : null }>
                -
              </Button>
            </CardActionArea>
        </Card>
    </Container>
    );
};

export default TracksCard;