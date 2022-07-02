import React from 'react'
import Background from '../assets/img/background.jpg'

import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  background: {
    backgroundImage: Background
  }
})

const Festival = () => {
  const classes = useStyles()
  return (
    <Box className={classes.background}>
      <Typography>
        Welcome!
      </Typography>
    </Box>
  )
}

export default Festival