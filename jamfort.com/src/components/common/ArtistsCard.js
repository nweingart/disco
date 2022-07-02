import React from 'react';
import { makeStyles, Typography } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import Container from '@material-ui/core/Container';


const useStyles = makeStyles({
    root: {
      maxWidth: 500,
      marginBottom: '15%'
    },
    media: {
      height: 200,
    },
    selected: {
      backgroundColor: 'green',
      maxWidth: 300,
      marginBottom: '15%',
    },
  });


const ArtistCard = props => {
    const classes = useStyles();

    return (
            <Container>
                <Card className={classes.root}>
                    <CardActionArea>
                        <Typography>
                            {props.artist}
                        </Typography>
                        <CardMedia 
                            className={classes.media}
                            image={props.cardImageUrl}
                            title={props.artist}
                        />
                    </CardActionArea>
                </Card>
            </Container>
    );
};

export default ArtistCard;
