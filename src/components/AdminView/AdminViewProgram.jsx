import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import './Program.css'
import "./StudentSearch.css";
import AddProgram from './AddProgram';
import EditProgram from './EditProgram';
import ProgramDataGrid from '../DataGrid/ProgramDataGrid';

import Typography from "@mui/material/Typography";

import ProgramSearch from '../Search/ProgramSearch';

function AdminViewProgram() {
const dispatch = useDispatch();

const programList = useSelector(store => store.program);
const programToEdit = useSelector(store => store.programToEdit);

useEffect(() => {
  dispatch({ type: 'FETCH_PROGRAM'});
}, [])

return (
  <>
    <Typography variant="h5" style={{ marginTop: 60, marginBottom: 10 }}>ADD PROGRAM FORM</Typography>
    <AddProgram />
    
    <Typography variant="h5" style={{ marginTop: 60, marginBottom: 20 }}>EDIT PROGRAM FORM</Typography>
      <ProgramSearch />
      {Object.keys(programToEdit).length > 0 &&
        <EditProgram />
      }
    <Typography variant="h5" style={{ marginTop: 40, marginBottom: 20 }}>PROGRAMS</Typography>
      { Object.keys(programList).length > 0 &&
        <ProgramDataGrid />
      }
  </>
)
}

export default AdminViewProgram;