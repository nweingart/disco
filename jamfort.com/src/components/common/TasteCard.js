import React from 'react'
import { makeStyles } from '@material-ui/core'
import Card from '@material-ui/core/Card'
import Container from '@material-ui/core/Container'
import CardMedia from '@material-ui/core/CardMedia'
import CircularProgress from '@material-ui/core/CircularProgress'
import Typography from '@material-ui/core/Typography'
import CardActionArea from '@material-ui/core/CardActionArea'
import Box from '@material-ui/core/Box'

const useStyles = makeStyles({
    root: {
        maxWidth: 300,
        marginBottom: '15%'
    },
      media: {
        height: 300,
    },
})

const TasteCard = ({ name, image, popularity }) => {
    const classes = useStyles();
    return (
       <Container className={classes.root}>
        <Card>
            <Box>
                <CircularProgress 
                    variant="determinate"
                    value={popularity}
                />
                </Box>
            <CardActionArea>
                <Typography>
                    {name}
                </Typography>
                <CardMedia 
                    className={classes.media}
                    image={image}
                    title={name}
                />
            </CardActionArea>
        </Card>
       </Container>
    )
}

export default TasteCard;