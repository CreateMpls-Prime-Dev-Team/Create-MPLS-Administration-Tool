import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Chart from 'chart.js/auto';
import './Dashboard.css'
import { Pie, Line, Bar } from 'react-chartjs-2';
import { height } from '@mui/system';
function Dashboard() {

  const dispatch = useDispatch();
  const { ethnicity, gender, minutesByMonth } = useSelector(store => store.charts);
  
  useEffect(() => {
    dispatch({ type: 'FETCH_DASHBOARD'});
  }, [])

  const ethnicityPieGraph = () => {
    const ethnicityNames = ethnicity.map( (e) => e.name );
    const ethnicityTotals = ethnicity.map( (e) => e.total );

    const ethnicityData = {
      labels: ethnicityNames,
      datasets: [
        {
          label: 'Ethnicity Data',
          data: ethnicityTotals,
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)',
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)',
          ],
          borderWidth: 1,
        },
      ],
    };
    return <Pie id = "ethnicityPie" data={ethnicityData} />
  }
  
  const genderPieGraph = () => {
    const genderNames = gender.map( (g) => g.name );
    const genderTotals = gender.map( (g) => g.total );
    const genderData = {
      labels: genderNames,
      datasets: [
        {
          label: 'Gender Data',
          data: genderTotals,
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)',
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)',
          ],
          borderWidth: 1,
        },
      ],
    };

    return <Pie id = "genderPie" data={genderData} />
  }

    const minutesByMonthLineGraph = () => {
      let totalMonths = 12; // Twelve months a year on earth.
      let recordIndex = 0; // Need to start the process somewhere, 
      let monthlyMinutes = [] // Payload for sending data to graph
      
      //Cycle through each month
      for (let month = 1; month <= totalMonths; month++) {
        //Check if there is a record to compare, and check if the month number matches
        if (minutesByMonth[recordIndex] && minutesByMonth[recordIndex].month_number === month){
          //If so push info to array and increment the array index
          monthlyMinutes.push(minutesByMonth[recordIndex].total_minutes);
          recordIndex++;
        } else {
          //If no record is found push 0 minutes
          monthlyMinutes.push(0);
        }
      }

      const enrollmentData = {
        labels: ['Jan', 'Feb', 'March', 'April', 'May', 'June', "July", "Aug", "Sep", "Oct", "Nov", "Dec"],
        datasets: [
          {
            label: 'Student Enrollment by Month',
            data: monthlyMinutes,
            fill: false,
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgba(255, 99, 132, 0.2)',
          },
        ],
      };
      
      const barOptions = {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
              },
            },
          ],
        },
      };

      return <Line id ="studentEnrollment" data={enrollmentData} options={barOptions} style={{width: "20em", height: "100em"}} />
    }   

      

      const locationdata = {
        labels: ['Minneapolis', 'St. Paul', 'Suburbs', 'Anoka', 'Hopkins', 'Minnetonka'],
        datasets: [
          {
            label: 'Learning Lab',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: 'rgb(255, 99, 132)',
          },
          {
            label: 'Robot League',
            data: [2, 3, 20, 5, 1, 4],
            backgroundColor: 'rgb(54, 162, 235)',
          },
          {
            label: 'Coding Class Bro',
            data: [3, 10, 13, 15, 22, 30],
            backgroundColor: 'rgb(75, 192, 192)',
          },
        ],
      };
      
      const stackbaroptions = {
        scales: {
          yAxes: [
            {
              stacked: true,
              ticks: {
                beginAtZero: true,
              },
            },
          ],
          xAxes: [
            {
              stacked: true,
            },
          ],
        },
      };
      


return(  
<div id = "flex-chart-container" >
    <div class ="flex-child" style={{width: "20em", height: "20em"}}>
    <h4>Ethnicity </h4>
    {ethnicity && ethnicityPieGraph()}
    
    </div>

    <div div class ="flex-child" style={{width: "20em", height: "20em"}}>
    <h4>Gender </h4>
    {gender && genderPieGraph()}
    </div>

    <div div class ="flex-child" >
    <h4>Student Enrollment </h4>
    {minutesByMonth && minutesByMonthLineGraph()}
    </div>

    <div div class ="flex-child" >
    <h4>Enrollment by Location </h4>
    <Bar data={locationdata} options={stackbaroptions} />
    </div>

</div>
);


  
    // <p>Enrollment by Location Bar Chart</p>


}

export default Dashboard;