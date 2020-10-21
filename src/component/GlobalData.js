import React,{useEffect, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import NumberFormat from 'react-number-format';
import CountUp from 'react-countup';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(1),
      width: '100%',
      height: theme.spacing(16),
    },
      },
      
}));

export default function GlobalData() {
  const classes = useStyles();

  const [GlobalData, setGlobalData] = useState();
  const [DataLoading, setDataLoading] = useState(false);

useEffect(() => {
   
  async function fetchGlobalData(){
    setDataLoading(true);
    const ApiResponse = await fetch('https://api.thevirustracker.com/free-api?global=stats');
    const DataFromApi= await ApiResponse.json();
    setGlobalData(DataFromApi);
    setDataLoading(false);
   }
   fetchGlobalData();

}, [])

if(DataLoading){
return("")
}

  return (
    <div className={classes.root}>
      
          <Paper elevation={3}>
          
                <Typography variant="subtitle1" style={{color:'black'}} gutterBottom>
                Global Data
                </Typography>
                <Typography variant="h4" style={{color:'black', fontWeight:'bold' }} gutterBottom>
                {/* <NumberFormat value={GlobalData && GlobalData.results && GlobalData.results[0].total_cases} displayType={'text'} thousandSeparator={true} /> */}
                <CountUp start={0} end={GlobalData && GlobalData.results && GlobalData.results[0].total_cases} duration={2.5} separator=","/>
                      
                </Typography>
          
          </Paper>

          <Paper elevation={3}>
         
                <Typography variant="subtitle1" style={{color:'yellow'}}  gutterBottom>
                Active
                </Typography>
                <Typography variant="h4" style={{color:'yellow', fontWeight:'bold'}} gutterBottom>
                
                {/* <NumberFormat value={GlobalData && GlobalData.results && GlobalData.results[0].total_active_cases} displayType={'text'} thousandSeparator={true} /> */}
                <CountUp start={0} end={GlobalData && GlobalData.results && GlobalData.results[0].total_active_cases} duration={2.5} separator=","/>
                      
                </Typography>
         
          </Paper>

          <Paper elevation={3}>
          
                <Typography variant="subtitle1" style={{color:'green'}}  gutterBottom>
                Recover
                </Typography>
                <Typography variant="h4" style={{color:'green', fontWeight:'bold'}} gutterBottom>
                {/* <NumberFormat value= {GlobalData && GlobalData.results && GlobalData.results[0].total_recovered} displayType={'text'} thousandSeparator={true} /> */}
                <CountUp start={0} end={GlobalData && GlobalData.results && GlobalData.results[0].total_recovered} duration={2.5} separator=","/>
                         
                </Typography>

          </Paper>

          <Paper elevation={3}>
         
                <Typography variant="subtitle1" style={{color:'red'}}  gutterBottom>
                Death
                </Typography>
                <Typography variant="h4" style={{color:'red', fontWeight:'bold'}} gutterBottom>
                
                {/* <NumberFormat value= {GlobalData && GlobalData.results && GlobalData.results[0].total_deaths} displayType={'text'} thousandSeparator={true} /> */}
                <CountUp start={0} end={GlobalData && GlobalData.results && GlobalData.results[0].total_deaths} duration={2.5} separator=","/>
                      
                </Typography>
          </Paper>
    </div>
  );
}
