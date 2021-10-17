import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { DataGrid } from '@mui/x-data-grid';


const StaffAssignmentsDataGrid = () => {
    const staffList = useSelector(store => store.staffAssignments);
    const programId = useSelector(store => store.programToEdit);
    const dispatch = useDispatch()

    useEffect(()=> {
        dispatch({
            type: 'FETCH_STAFF_ASSIGNMENTS',
            payload: {
                id: programId.id
            }
        })
    }, [programId])

    const columns = [
        { field: 'first_name', headerName: 'Staff', width: 150 },
        { field: 'last_name', headerName: '', width: 150}
    ]

    return (
        <>
        <center>
            <div style={{ height: 350, width: 400 }}>
                <DataGrid
                    rows={staffList}
                    columns={columns}
                />
            </div>
        </center>
        </>
    )
}

export default StaffAssignmentsDataGrid;