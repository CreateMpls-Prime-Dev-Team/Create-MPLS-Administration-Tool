import React from 'react';
import { useSelector } from 'react-redux';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';

const ProgramDataGrid = () => {
    const programList = useSelector(store => store.program);

    const columns = [
        { field: 'name', headerName: 'Program Name', width: 200 },
        { field: 'location', headerName: 'Location', width: 200 },
        { field: 'type_name', headerName: 'Type', width: 150 },
        { field: 'staff', headerName: 'Staff', width: 200},
        { field: 'num_students', headerName: '# Students', width: 100},
    ]

    return (
        <>
            <center>
                <div style={{ height: 300, width: '75%' }}>
                    <DataGrid
                        rows={programList}
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

export default ProgramDataGrid;
