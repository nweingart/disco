import React from 'react';
import { makeStyles, Typography } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles({
  root: {
    maxWidth: 300,
    marginBottom: '15%'
  },
  media: {
    height: 100,
  },
});


const GenreCard = ({ genre }) => {
  const classes = useStyles();

  return (
    <Container>
      <Card className={classes.root}>
        <CardActionArea>
          <Typography>
            {genre}
          </Typography>
          <CardMedia
            className={classes.media}
            title={genre}
          />
        </CardActionArea>
      </Card>
    </Container>
  );
};

export default GenreCard;