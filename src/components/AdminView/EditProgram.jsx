import React, { useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { 
  Button,
  TextField,
  FormControl,
  Select,
  MenuItem,
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
        <TextField 
          required 
          name="name"
          variant="outlined"
          style={{ margin: 5 }}
          label="First Name"
          value={programToEdit.name}
          onChange={handleChange}
        />
        <TextField 
          required 
          name="location"
          variant="outlined"
          style={{ margin: 5 }}
          label="First Name"
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
        <Button 
          id="deleteBttn" 
          color="error" 
          variant="outlined"
          onClick={handleDelete}
        >
          Delete Program
        </Button>
        <Button 
          id="addBttn" 
          variant="outlined"
          onClick={handleUpdate}
        >
          SAVE
        </Button>
          
      </div>
    )
}

export default EditProgram;
