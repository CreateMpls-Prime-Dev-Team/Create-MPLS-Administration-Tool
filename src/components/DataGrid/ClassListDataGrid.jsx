import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { DataGrid } from '@mui/x-data-grid';






const ClassListDataGrid = () => {
    const classList = useSelector(store => store.studentAssignments);
    const programId = useSelector(store => store.programToEdit);
    const dispatch = useDispatch()

    useEffect(()=> {
        dispatch({
            type: 'FETCH_STUDENT_ASSIGNMENTS',
            payload: {
                id: programId.id
            }
        })
    }, [programId])

    const columns = [
        { field: 'first_name', headerName: 'Student(s)', width: 150 },
        { field: 'last_name', headerName: '', width: 150}
    ]

    return (
        <>
        <center>
            <div style={{ height: 350, width: 400 }}>
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