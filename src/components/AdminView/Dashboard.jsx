import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Chart from 'chart.js/auto';
import './Dashboard.css'
import { Pie, Line, Bar } from 'react-chartjs-2';
import { height } from '@mui/system';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import getMonthDDYYYY from '../../utility/getMonthDDYYYY';
import { object } from 'prop-types';
function Dashboard() {

  const dispatch = useDispatch();
  const { 
    ethnicity, 
    gender, 
    minutesByMonth,
    occurrenceGrid,
    studentGrid,
    teacherGrid 
  } = useSelector(store => store.charts);
  
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
            label: 'Student Total Minutes by Month',
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

    const occurrenceDataGrid = () => {

      let formattedOccurrenceGrid = occurrenceGrid.map((object) => {
        return { ...object, date: getMonthDDYYYY(object.date) }
      });
      const columns = [
        { field: 'date', headerName: 'Date', width: 200 },
        { field: 'program_name', headerName: 'Name', width: 200 },
        { field: 'program_location', headerName: 'Location', width: 200 },
        { field: 'teacher_first_name', headerName: 'First Name', width: 200 },
        { field: 'teacher_last_name', headerName: 'Last Name', width: 200 },
        { field: 'duration', headerName: 'Duration', width: 200 },
        { field: 'volunteers', headerName: 'Volunteers', width: 200 },
        { field: 'student_count', headerName: 'Student Count', width: 200 },
      ];
      return (
        <div style={{ height: 500, width: '75%' }}>
          <DataGrid  
            rows={formattedOccurrenceGrid} 
            columns={columns} 
            components={{
              Toolbar: GridToolbar,
            }}
          />
        </div>)
    }
      
    const studentDataGrid = () => {

      const columns = [
        { field: 'last_name', headerName: 'Last Name', width: 200 },
        { field: 'first_name', headerName: 'First Name', width: 200 },
        { field: 'ethnicity', headerName: 'Ethnicity', width: 200 },
        { field: 'gender', headerName: 'Gender', width: 200 },
        { field: 'grade', headerName: 'Grade', width: 200 },
        { field: 'total_minutes', headerName: 'Total Minutes', width: 200 },
      ];
      return (
        <div style={{ height: 500, width: '75%' }}>
          <DataGrid  
            rows={studentGrid} 
            columns={columns} 
            components={{
              Toolbar: GridToolbar,
            }}
          />
        </div>)
    }

    const teacherDataGrid = () => {

      const columns = [
        { field: 'last_name', headerName: 'Last Name', width: 200 },
        { field: 'first_name', headerName: 'First Name', width: 200 },
        { field: 'total_minutes', headerName: 'Total Minutes', width: 200 },
      ];
      return (
        <div style={{ height: 250, width: '75%' }}>
          <DataGrid  
            rows={teacherGrid} 
            columns={columns} 
            components={{
              Toolbar: GridToolbar,
            }}
          />
        </div>)
    }


  return(  
    <>
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
        <h4>Total Minutes per Month</h4>
        {minutesByMonth && minutesByMonthLineGraph()}
        </div>
      </div>
      <div>
        {occurrenceGrid && occurrenceDataGrid()}
      </div>
      <div>
        {studentGrid && studentDataGrid()}
      </div>
      <div>
        {teacherGrid && teacherDataGrid()}
      </div>
    </>
  );

}

export default Dashboard;