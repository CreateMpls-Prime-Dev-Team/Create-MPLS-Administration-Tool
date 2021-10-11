import React, { useEffect } from "react";
import "./AdminView.css";
import { useSelector, useDispatch } from 'react-redux';

import StudentSearch from "../Search/StudentSearch";
import AddStudent from "./AddStudent";
import EditStudent from "./EditStudent";
import StudentDataGrid from "../DataGrid/StudentDataGrid";

import Typography from "@mui/material/Typography";


function AdminViewStudent() {

    const studentToEdit = useSelector(store => store.studentToEdit);
    
    let dispatch = useDispatch();
    useEffect(() => { 
        dispatch({ type: 'FETCH_STUDENT' });
    }, [])
    
    return (
        <>
            <Typography variant="h5" style={{marginTop: 40, marginBottom: 20}}>ADD STUDENT FORM</Typography>
            <AddStudent />

            <Typography variant="h5" style={{ marginTop: 60, marginBottom: 10 }}>EDIT STUDENT FORM</Typography>
            <StudentSearch />
            { Object.keys(studentToEdit).length > 0 &&
                <EditStudent/> //Display only when there is a student to edit
            }
            <Typography variant="h5" style={{ marginTop: 60, marginBottom: 20 }}>ALL STUDENTS</Typography>
            <StudentDataGrid />
        </>
    );
}

export default AdminViewStudent;
