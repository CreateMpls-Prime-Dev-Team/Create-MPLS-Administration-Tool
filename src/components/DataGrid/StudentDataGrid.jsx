import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { DataGrid, GridRowsProp, GridColDef } from '@mui/x-data-grid';
import { 
    Button, 
    Select, 
    MenuItem,
    FormControl,
    InputLabel 
} from '@mui/material';

import StudentDataGridGenderSelector from './StudentDataGridParts/StudentDataGridGenderSelector';

const StudentDataGrid = () => {
    const studentList = useSelector(store => store.student);
    
    const columns = [
        { field: 'first_name', headerName: 'First Name', width: 175 },
        { field: 'last_name', headerName: 'Last Name', width: 175 },
        { field: 'age', headerName: 'Age', width: 75 },
        { field: 'grade_abbrev', headerName: 'Grade', width: 175 },
        { field: 'ethnicity_name', headerName: 'Ethnicity', width: 175 },
        { field: 'gender_name', headerName: 'Gender', width: 150 },
    ]

    return (
        <>
        <center>
        <div style={{ height: 500, width: '85%' }}>
            <DataGrid rows={studentList} columns={columns} />
        </div>
        </center>
        </>
    )
}

export default StudentDataGrid;
