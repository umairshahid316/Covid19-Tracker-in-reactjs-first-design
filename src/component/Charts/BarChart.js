import React from 'react';
import {Bar} from 'react-chartjs-2';




export const BarChart = (props) => {
    // GlobalData && GlobalData.results && GlobalData.results[0].total_recovered

    const TotalCases=props.GlobalData && props.GlobalData.countrydata && props.GlobalData.countrydata[0].total_cases;
    const Recoverd=props.GlobalData && props.GlobalData.countrydata && props.GlobalData.countrydata[0].total_recovered;
    const Active=props.GlobalData && props.GlobalData.countrydata && props.GlobalData.countrydata[0].total_active_cases;
    const Death=props.GlobalData && props.GlobalData.countrydata && props.GlobalData.countrydata[0].total_deaths;
    const UnreSolved=props.GlobalData && props.GlobalData.countrydata && props.GlobalData.countrydata[0].total_unresolved;
   
   
    console.log("Data here ",TotalCases)
    const data = {
        labels: ['TotalCases', 'Recoverd', 'Active', 'Death', 'Unresloved'],
        datasets: [
          {
            label: 'Records',
            backgroundColor: 'rgba(255,99,132,0.2)',
            borderColor: 'rgba(255,99,132,1)',
            borderWidth: 1,
            hoverBackgroundColor: 'rgba(255,99,132,0.4)',
            hoverBorderColor: 'rgba(255,99,132,1)',
            data: [TotalCases, Recoverd, Active, Death, UnreSolved]
          }
          
        ]
      };
    
    
    return (
        <div>
 <h2>{props.CodeName.name+" "}COVID19 Records</h2>
        <Bar
          data={data}
          width={100}
          height={40}
          options={{
            maintainAspectRatio: true,
            scales: {
                yAxes: [{
                    ticks: {
                        // beginAtZero: true
                        // endAtHundread: true
                    min:0,
                    
                      }
                }]
            }
          }}
        />            

        </div>
    )
}
