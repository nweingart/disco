import React from 'react';
import { makeStyles } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import { saveTrack, removeTrack } from "../../spotify/SpotifyAuth";
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button'
import ReactAudioPlayer from "react-audio-player";

const useStyles = makeStyles({
    root: {
      height: '70%',
      maxWidth: 500,
      marginBottom: '15%'
    },
    media: {
      height: 700,
    },
    label: {
      fontWeight: 400,
      fontFamily: 'sans-serif'
    }
  });
  

const TracksCard = ({ name, artist, cardImageUrl, releaseYear, id, recommendation, previewUri }) => {
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
              <div className={classes.label}>
                <Typography>
                  {`${name}, ${artist} (${releaseYear})`}
                </Typography>
              </div>

                <CardMedia
                    className={classes.media}
                    image={cardImageUrl}
                    title={artist}
                />
              <ReactAudioPlayer
                src={previewUri}
                autoPlay={false}
                loop={true}
                controls
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