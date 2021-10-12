import React from 'react';
import { useSelector } from 'react-redux';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';

const StaffDataGrid = () => {
    const staffList = useSelector(store => store.teacher);

    const columns = [
        { field: 'first_name', headerName: 'First Name', width: 175 },
        { field: 'last_name', headerName: 'Last Name', width: 175 },
        { field: 'is_active', headerName: 'Active', wifth: 175},
        { field: 'assigned_class', headerName: 'Class(es)', width: 175},
    ]

    return (
        <>
            <center>
                <div style={{ height: 250, width: '75%' }}>
                    <DataGrid 
                        rows={staffList} 
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

export default StaffDataGrid;