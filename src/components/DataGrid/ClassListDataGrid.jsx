import React from 'react';
import { useSelector } from 'react-redux';
import { DataGrid } from '@mui/x-data-grid';

const ClassListDataGrid = () => {
    const [classList, setClassList] = React.useState([]);

    const columns = [
        { field: 'student', headerName: 'Student(s)', width: 350 },
    ]

    return (
        <>
        <center>
            <div style={{ height: 250, width: '65%' }}>
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