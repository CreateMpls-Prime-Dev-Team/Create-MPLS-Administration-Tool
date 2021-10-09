import React from 'react';
import { useSelector } from 'react-redux';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { 
    Button, 
    Select, 
    MenuItem,
    FormControl,
    InputLabel 
} from '@mui/material';


const StudentDataGrid = () => {
    const studentList = useSelector(store => store.student);
    
    const columns = [
        { field: 'first_name', headerName: 'First Name', width: 175 },
        { field: 'last_name', headerName: 'Last Name', width: 175 },
        { field: 'age', headerName: 'Age', width: 75, align: "center" },
        { field: 'grade_abbrev', headerName: 'Grade', width: 75, align: "center" },
        { field: 'ethnicity_name', headerName: 'Ethnicity', width: 300 },
        { field: 'gender_name', headerName: 'Gender', width: 100, align: "center" },
    ]

    return (
        <>
        <center>
        <div style={{ height: 500, width: '75%' }}>
            <DataGrid 
                rows={studentList} 
                columns={columns} 
                components={{
                    Toolbar: GridToolbar,
                }}
            />
        </div>
        </center>
        </>
    )
}

export default StudentDataGrid;
