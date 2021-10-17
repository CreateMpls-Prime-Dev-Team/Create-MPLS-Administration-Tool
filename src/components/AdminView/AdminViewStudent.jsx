import React, { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import "./AdminView.css";
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
            <AddStudent />
            <Typography variant="h5" style={{ marginTop: 20, marginBottom: 20 }}>EDIT STUDENT FORM</Typography>
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
