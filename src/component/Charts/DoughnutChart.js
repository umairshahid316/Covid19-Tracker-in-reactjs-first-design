import React from 'react';
import {Doughnut} from 'react-chartjs-2';

 
export const DoughnutChart = (props) => {

  const Recoverd=props.GlobalData && props.GlobalData.countrydata && props.GlobalData.countrydata[0].total_recovered;
  const Active=props.GlobalData && props.GlobalData.countrydata && props.GlobalData.countrydata[0].total_active_cases;
  const Death=props.GlobalData && props.GlobalData.countrydata && props.GlobalData.countrydata[0].total_deaths;
 
  const data = {
    labels: [
      'Active',
      'Recovered',
      'Death'
    ],
    datasets: [{
      data: [Active, Recoverd, Death],
      backgroundColor: [
      'Yellow',
      'Green',
      'Red'
      ],
      hoverBackgroundColor: [
      'lightYellow',
      'lightGreen',
      'lightRed'
      ]
    }]
  };
  console.log("active "+Active)

  return (
        <div>
 <h2>{props.CodeName.name+" "}COVID19 Records</h2>
        <Doughnut data={data} />        
        </div>
    )
}


