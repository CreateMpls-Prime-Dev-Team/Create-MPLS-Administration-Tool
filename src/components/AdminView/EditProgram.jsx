import React, { useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { 
  Button,
  TextField,
  FormControl,
  Select,
  MenuItem,
  Paper
} from "@mui/material";



const EditProgram = () => {
  const dispatch = useDispatch();
  const programToEdit = useSelector(store => store.programToEdit);
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
  
    return (
      <div>
        <Paper elevation={24}>
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
          <Select
            name="type_id"
            style={{ margin: 5 }}
            onChange={handleChange}
            value={programToEdit.type_id}
          >
            {(Object.keys(settings).length > 0 ) ? settings.type.map((t)=> (
                <MenuItem key={t.id} value={t.id}>{t.name}</MenuItem>
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
      </Paper>
      </div>
    )
}

export default EditProgram;
