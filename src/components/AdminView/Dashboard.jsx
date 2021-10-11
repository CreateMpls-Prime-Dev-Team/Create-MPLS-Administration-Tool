import react from 'react'
import Chart from 'chart.js/auto';
import './Dashboard.css'
import { Pie } from 'react-chartjs-2';
function Dashboard() {

    const ethnicitydata = {
        labels: ['White', 'Hispanic', 'Latino', 'Somali', 'FFFFFF', '12345'],
        datasets: [
          {
            label: '# of Votes',
            data: [10, 20, 30, 10, 10, 20],
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
            label: '# of Votes',
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

return(  
<div id = "flex-chart-container" >
    <div class ="flex-child" style={{width: "20em"}}>
    <h4>Ethnicity </h4>
    <Pie id = "ethnicityPie" data={ethnicitydata} />
    </div>

    <div div class ="flex-child" style={{width: "20em"}}>
    <h4>Gender </h4>
    <Pie id = "ethnicityPie" data={genderdata} />
    </div>
</div>
);


    // <p>Gender Pie</p>
    // <p>Student Enrollment Line Chart</p>
    // <p>Enrollment by Location Bar Chart</p>


}

export default Dashboard;