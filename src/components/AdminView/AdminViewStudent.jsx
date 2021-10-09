import React, { useEffect } from "react";
import "./AdminView.css";
import { useDispatch } from 'react-redux';
import StudentSearch from "../Search/studentSearch";

import AddStudent from "./AddStudent";
import EditStudent from "./EditStudent";

import StudentDataGrid from "../DataGrid/StudentDataGrid";

function AdminViewStudent() {

    let dispatch = useDispatch();
    useEffect(() => { 
        dispatch({ type: 'FETCH_STUDENT' });
    }, [])
    
    return (
        <>
        <AddStudent />
        <StudentSearch/>
        <EditStudent/>
        <StudentDataGrid />
        </>
    );
}

export default AdminViewStudent;
