import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

//import component
import GlobalData from './GlobalData';
import ChartData from './ChartData';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function MainGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={0}>
        <Grid item xs={3}>
              <Paper className={classes.paper}>
              <GlobalData/>
              </Paper>
        </Grid>
        <Grid item xs={9}>
              <Paper className={classes.paper}>
                <Typography variant="h4" style={{color:'black', fontWeight:'bold'}} gutterBottom>      
                    Countries Data Chart
                </Typography>            
        
              <ChartData/>
          </Paper>



        </Grid>
        
      </Grid>
     
     
    </div>
  );
}