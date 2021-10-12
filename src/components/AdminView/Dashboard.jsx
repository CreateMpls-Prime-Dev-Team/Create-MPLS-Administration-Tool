import react from 'react'
import Chart from 'chart.js/auto';
import './Dashboard.css'
import { Pie, Line, Bar } from 'react-chartjs-2';
import { height } from '@mui/system';
function Dashboard() {

    const ethnicitydata = {
        labels: ['White', 'Hispanic', 'Latino', 'Somali'],
        datasets: [
          {
            label: 'Ethnicity Data',
            data: [10, 20, 30, 10],
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

      const genderdata = {
        labels: ['Male', 'Female'],
        datasets: [
          {
            label: 'Gender Data',
            data: [10, 20],
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

      const enrollmentdata = {
        labels: ['Jan', 'Feb', 'March', 'April', 'May', 'June', "July", "Aug", "Sep", "Oct", "Nov", "Dec"],
        datasets: [
          {
            label: 'Student Enrollment by Month',
            data: [12, 19, 3, 5, 2, 1000, 1200, 1400, 1234, 1412, 1242, 5231],
            fill: false,
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgba(255, 99, 132, 0.2)',
          },
        ],
      };
      
      const baroptions = {
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
    <Pie id = "ethnicityPie" data={ethnicitydata} />
    </div>

    <div div class ="flex-child" style={{width: "20em", height: "20em"}}>
    <h4>Gender </h4>
    <Pie id = "genderPie" data={genderdata} />
    </div>

    <div div class ="flex-child" >
    <h4>Student Enrollment </h4>
    <Line id ="studentEnrollment" data={enrollmentdata} options={baroptions} style={{width: "20em", height: "100em"}} />
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