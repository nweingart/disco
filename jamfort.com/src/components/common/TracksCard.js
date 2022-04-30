import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import Container from '@material-ui/core/Container';
import CloseRoundIcon from '@material-ui/icons/CloseRounded'
import IconButton from '@material-ui/core/IconButton';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
      maxWidth: 300,
      marginBottom: '15%'
    },
    media: {
      height: 300,
    },
    box : {
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    exitIcon: {
        marginLeft: '-3.75%',
        marginTop: '-3.75%',
    },
    modalTitle : {
        padding: "0.75rem",
        borderTopLeftRadius: ".4375rem",
        borderTopRightRadius: ".4375rem",
        fontSize: '18px',
        fontWeight: 'bold',
        marginBottom: -10,
        textAlign: 'justify',
    },
    modalContent : {
        padding: "0.75rem",
        paddingInline: "2.75rem",
        borderTopLeftRadius: ".4375rem",
        borderTopRightRadius: ".4375rem",
        fontSize: '14px',
        marginBottom: 25,
        textAlign: 'center',
      },
  });
  

const TracksCard = ({name, artist, cardImageUrl, dialogueImageUrl, popularity}) => {
    const [open, setOpen] = useState(false);
    const classes = useStyles();

    const handleOpen = () => {
        setOpen(true);
    }

    const handleClose = () => {
        setOpen(false);
    }


    return (
        <Container>
            <Card className={classes.root}>
                <CardActionArea>
                    <Typography>
                        {name}
                    </Typography>
                    <CardMedia 
                        className={classes.media}
                        image={cardImageUrl}
                        title={artist}
                        onClick={handleOpen}
                    />
                </CardActionArea>
            </Card>
            <Dialog open={open}>
                <DialogContent>
                    <IconButton onClick={handleClose} className={classes.exitIcon} >
                        <CloseRoundIcon />
                    </IconButton>
                    <Box className={classes.modalTitle}>
                        <Typography>
                            {name}
                        </Typography>
                    </Box>
                    <Box className={classes.box}>
                        <CardMedia component="img" src={dialogueImageUrl}/>
                    </Box>
                    <Box className={classes.box}>
                        <Typography>
                            Popularity: {popularity}
                        </Typography>
                    </Box>
                    <Box className={classes.box}>
                        <Typography>
                            Artist: {artist}
                        </Typography>
                    </Box>
                </DialogContent>
            </Dialog>
        </Container>
    );
};

export default TracksCard;