import React from 'react';
import { useSelector } from 'react-redux';
import { DataGrid } from '@mui/x-data-grid';

const ClassListDataGrid = () => {
    const [classList, setClassList] = React.useState([]);

    const columns = [
        { field: 'student', headerName: 'Student(s)', width: 200 },
        { field: 'staff', headerName: 'Staff', width: 200 },
    ]

    return (
        <>
        <center>
            <div style={{ height: 250, width: '50%' }}>
                <DataGrid
                    rows={classList}
                    columns={columns}
                />
            </div>
        </center>
        </>
    )
}

export default ClassListDataGrid;