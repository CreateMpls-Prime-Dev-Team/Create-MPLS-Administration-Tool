import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import{ Box, TextField, MenuItem, FormControl, Select, Button, Paper } from "@mui/material";







const EditStudent = () => {
    const dispatch = useDispatch()
    const studentToEdit = useSelector(store => store.studentToEdit);
    const settings = useSelector(store => store.settings);

    const handleChange = (event) => {
        dispatch({
            type: 'SET_STUDENT_TO_EDIT',
            payload: { ...studentToEdit, [event.target.name]:event.target.value }
        })
    }

    const handleUpdate = () => {
        dispatch({
            type: 'EDIT_STUDENT',
            payload: studentToEdit
        })
    }

    const handleDelete = () => {
        if(confirm('This will make the student unavailable')){
            dispatch({ 
                type: 'DELETE_STUDENT', 
                payload: studentToEdit.id })  
        }
    }

    return (
        <>
        <center>
            <Paper>
            <Box style={{ width: '50%' }}>
                <div>
                    <TextField 
                        required 
                        name="first_name"
                        variant="outlined"
                        style={{ margin: 5, width: '45%' }}
                        label="First Name"
                        value={studentToEdit.first_name}
                        onChange={handleChange}
                    />
                    <TextField 
                        required 
                        name="last_name"
                        variant="outlined"
                        style={{ margin: 5, width: '45%' }}
                        label="Last Name" 
                        value={studentToEdit.last_name}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <TextField 
                        required 
                        name="age"
                        variant="outlined"
                        style={{ margin: 5, width: 100 }}
                        label="Age" 
                        value={studentToEdit.age}
                        onChange={handleChange}
                    />
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
                </div>
                <div>
                    <Button 
                        id="addBttn" 
                        variant="outlined"
                        style={{ margin: 5, marginBottom: 20 }}
                        onClick={handleUpdate}
                    >
                        Update Student
                    </Button>
                    <Button 
                        id="addBttn" 
                        color="error" 
                        variant="outlined"
                        style={{ margin: 5, marginBottom: 20 }}
                        onClick={handleDelete}
                    >
                        Delete Student
                    </Button>
                </div>
            </Box>
            </Paper>
        </center>
    </>    
    );
}

export default EditStudent;
