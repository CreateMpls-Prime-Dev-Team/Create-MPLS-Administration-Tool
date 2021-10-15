import React, { useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { 
  Button,
  TextField,
  FormControl,
  Select,
  MenuItem,
  Paper,
  InputLabel,
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Divider,
  Container,
  Box
} from "@mui/material";
import AddStudentSearch from '../Search/AddStudentSearch';
import AddStaffSearch from '../Search/AddStaffSearch';
import ClassListDataGrid from '../DataGrid/ClassListDataGrid';
import StaffAssignmentsDataGrid from '../DataGrid/StaffAssignmentsDataGrid';


const EditProgram = () => {
  const dispatch = useDispatch();
  const programToEdit = useSelector(store => store.programToEdit);
  const studentToAdd = useSelector(store => store.studentToAdd);
  const staffToAdd = useSelector(store => store.staffToAdd);
  const settings = useSelector(store => store.settings);

  const handleChange = (event) => {
    dispatch({
        type: 'SET_PROGRAM_TO_EDIT',
        payload: { ...programToEdit, [event.target.name]:event.target.value }
      })
    }

  const handleUpdate = () => {
    console.log('TIME TO UPDATE', studentToEdit);
    dispatch({
        type: 'EDIT_STUDENT',
        payload: studentToEdit
    })
  }

  const handleDelete = () => {
    if(confirm('This will make the program unavailable')){
        dispatch({ type: 'DELETE_PROGRAM', payload: programToEdit.id })
    }
  }

  const onAddStaffToProgram = () => {
    dispatch({ 
        type: 'ADD_STAFF_PROGRAM', 
        payload: {
          userId: staffToAdd.id,
          programId: programToEdit.id
        } 
      });
  }

  const onAddStudentToProgram = () => {
    dispatch({ 
        type: 'ADD_STUDENT_PROGRAM', 
        payload: {
          studentId: studentToAdd.id,
          programId: programToEdit.id
        } 
      });
  }
  
    return (
      <div>
        <Paper>
        <TextField 
          required 
          name="name"
          variant="outlined"
          style={{ margin: 5 }}
          label="Program"
          value={programToEdit.name}
          onChange={handleChange}
        />
        <TextField 
          required 
          name="location"
          variant="outlined"
          style={{ margin: 5 }}
          label="Location"
          value={programToEdit.location}
          onChange={handleChange}
        />
        <FormControl>
          <InputLabel id="typeSelect">Type</InputLabel>
          <Select
            name="type_id"
            id="demo-simple-select"
            style={{ margin: 5 }}
            onChange={handleChange}
            value={programToEdit.type_id}
          >
            {(Object.keys(settings).length > 0 ) ? settings.type.map((t)=> (
              <>
                <MenuItem key={t.id} value={t.id}>{t.name}</MenuItem>
              </>
            )) :
                <MenuItem value={0}>Loading....</MenuItem>
            }
          </Select>
      </FormControl>
      <div>
        <Button 
          id="deleteBttn" 
          color="error" 
          variant="outlined"
          style={{ margin: 5, marginBottom: 20, width: 200 }}
          onClick={handleDelete}
        >
          Delete Program
        </Button>
        <Button 
          id="addBttn" 
          variant="outlined"
          style={{ margin: 5, marginBottom: 20, width: 200 }}
          onClick={handleUpdate}
        >
          SAVE
        </Button>
      </div>
        <div>
        <Typography variant="h6">ADD STUDENTS TO PROGRAM</Typography>
        <AddStudentSearch /> 
        <Button
          variant="outlined"
          style={{ margin: 5, marginBottom: 20, width: 200 }}
          onClick={onAddStudentToProgram}
        >
        ADD
        </Button>
        <ClassListDataGrid />
        </div>
        

        <Typography variant="h6">ADD STAFF TO PROGRAM</Typography>
        <AddStaffSearch />
        <Button
          variant="outlined"
          style={{ margin: 5, marginBottom: 20, width: 200 }}
          onClick={onAddStaffToProgram}
        >
          ADD
        </Button>
        <StaffAssignmentsDataGrid />
      </Paper>
      </div>
    )
}

export default EditProgram;
