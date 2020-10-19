import React,{useEffect, useState, useContext} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import NumberFormat from 'react-number-format';
import {BarChart} from './Charts/BarChart';
import {LineChart} from './Charts/LineChart';
import SelectChart from './SelectChart';
import { GlobalContext } from '../context/GlobalState';
import { DoughnutChart } from './Charts/DoughnutChart';


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(4),
      width: '100%',
      height: '40%',
    },
      },
      
}));


export default function ChartData() {
//useContxt
  const {CodeName} = useContext(GlobalContext);

  const classes = useStyles();

  const [GlobalData, setGlobalData] = useState();
  const [CountryData, setCountry] = useState();
 
  const [DataLoading, setDataLoading] = useState(false);
console.log("CodeName ",CodeName.name)

useEffect(() => {
   
  async function fetchGlobalData(){
    setDataLoading(true);
   // const ApiResponse = await fetch('https://api.thevirustracker.com/free-api?global=stats');
   const ApiResponse = await fetch('https://api.thevirustracker.com/free-api?countryTotal='+CodeName.code);
    const DataFromApi= await ApiResponse.json();
    setGlobalData(DataFromApi);
    setDataLoading(false);
   }
   fetchGlobalData();

}, [CodeName])

// useEffect(() => {
   
//     async function fetchGlobalData(){
//       setDataLoading(true);
//       const ApiResponse = await fetch('https://api.thevirustracker.com/free-api?countryTimeline=');
//                                       //  https://api.thevirustracker.com/free-api?countryTimeline=US
//       const DataFromApi= await ApiResponse.json();
//       setCountry(DataFromApi);
//       setDataLoading(false);
//      }
//      fetchGlobalData();
  
//   }, [])
  

if(DataLoading){
    return(
    <div>Loading...</div>
    )
}

// const totalCase=(GlobalData && GlobalData.results && GlobalData.results[0].total_recovered)
  return (
    <div className={classes.root}>
      
                <Paper elevation={3}>
                <BarChart CodeName={CodeName} GlobalData={GlobalData}/>
                </Paper>

          <Paper elevation={3}>
          {/* <LineChart/>        */}
        
        <DoughnutChart CodeName={CodeName} GlobalData={GlobalData}/>
          </Paper>

    </div>
  );
}
