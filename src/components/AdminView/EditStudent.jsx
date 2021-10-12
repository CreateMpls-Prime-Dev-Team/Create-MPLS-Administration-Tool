import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import{ 
  Box, 
  TextField, 
  InputLabel, 
  MenuItem, 
  FormControl, 
  Select,
  Button,
} from "@mui/material";


const EditStudent = () => {

    const dispatch = useDispatch()
    const studentToEdit = useSelector(store => store.studentToEdit);

    const settings = useSelector(store => store.settings);
    console.log(studentToEdit);

    const handleChange = (event) => {
        dispatch({
            type: 'SET_STUDENT_TO_EDIT',
            payload: { ...studentToEdit, [event.target.name]:event.target.value }
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
        if(confirm('This will make the student unavailable')){
            dispatch({ type: 'DELETE_STUDENT', payload: studentToEdit.id })
            
        }
    }

    return (
        <>
        <center>
            <Box style={{ width: '50%' }}>
                <div>
                    <TextField 
                        required 
                        name="first_name"
                        variant="outlined"
                        style={{ margin: 5 }}
                        label="First Name"
                        value={studentToEdit.first_name}
                        onChange={handleChange}
                    />
                    <TextField 
                        required 
                        name="last_name"
                        variant="outlined"
                        style={{ margin: 5 }}
                        label="Last Name" 
                        value={studentToEdit.last_name}
                        onChange={handleChange}
                    />
                    <TextField 
                        required 
                        name="age"
                        variant="outlined"
                        style={{ margin: 5 }}
                        label="Age" 
                        value={studentToEdit.age}
                        onChange={handleChange}
                    />
                </div>
                <FormControl>
                    <Select
                        name="grade_id"
                        style={{ margin: 5 }}
                        onChange={handleChange}
                        value={studentToEdit.grade_id}
                    >
                        {(Object.keys(settings).length > 0 ) ? settings.grade.map((gr)=> (
                            <MenuItem key={gr.id} value={gr.id}>{gr.name}</MenuItem>
                        )) :
                            <MenuItem value={0}>Loading....</MenuItem>
                        }
                    </Select>
                </FormControl>
                <FormControl>
                    <Select
                        name="ethnicity_id"
                        style={{ margin: 5 }}
                        onChange={handleChange}
                        value={studentToEdit.ethnicity_id}
                    >
                        {(Object.keys(settings).length > 0 ) ? settings.ethnicity.map((e)=> (
                            <MenuItem key={e.id} value={e.id}>{e.name}</MenuItem>
                        )) :
                            <MenuItem value={0}>Loading....</MenuItem>
                        }
                    </Select>
                </FormControl>
                <FormControl>
                    <Select
                        name="gender_id"
                        style={{ margin: 5 }}
                        onChange={handleChange}
                        value={studentToEdit.gender_id}
                    >
                        {(Object.keys(settings).length > 0 ) ? settings.gender.map((ge)=> (
                            <MenuItem key={ge.id} value={ge.id}>{ge.name}</MenuItem>
                        )) :
                            <MenuItem value={0}>Loading....</MenuItem>
                        }
                    </Select>
                </FormControl>
                <div>
                    <Button 
                        id="addBttn" 
                        variant="outlined"
                        style={{ margin: 5 }}
                        onClick={handleUpdate}
                    >
                        Update Student
                    </Button>
                    <Button 
                        id="addBttn" 
                        color="error" 
                        variant="outlined"
                        style={{ margin: 5 }}
                        onClick={handleDelete}
                    >
                        Delete Student
                    </Button>
                </div>
            </Box>
        </center>
    </>    
    );
}

export default EditStudent;
