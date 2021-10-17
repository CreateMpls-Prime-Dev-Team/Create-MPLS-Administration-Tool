import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import{ Box, TextField, Button, Paper } from "@mui/material";


const EditStaff = () => {
    const dispatch = useDispatch()
    const staffToEdit = useSelector(store => store.staffToEdit);
    const settings = useSelector(store => store.settings);

    const handleChange = (event) => {
        dispatch({
            type: 'SET_STAFF_TO_EDIT',
            payload: { ...staffToEdit, [event.target.name]:event.target.value }
        })
    }

    const handleUpdate = () => {
        console.log('TIME TO UPDATE', staffToEdit);
        dispatch({
            type: 'EDIT_STAFF',
            payload: staffToEdit
        })
    }

    const handleDelete = () => {
        if(confirm('This will make the staff unavailable')){
            dispatch({ type: 'DELETE_STAFF', payload: staffToEdit.id })

            dispatch({
            type: 'SET_STAFF_TO_EDIT',
            payload: { ...staffToEdit, is_staff : !staffToEdit.is_staff }
        })
        }  
    }

    return (
        <>
        <center>
            <Paper>
            <Box style={{ width: '50%', paddingTop: "1px", paddingBottom: "20px", marginTop: -30 }}>
                <div>
                    <TextField 
                        required 
                        name="first_name"
                        variant="outlined"
                        style={{ margin: 5 }}
                        label="First Name"
                        value={staffToEdit.first_name}
                        onChange={handleChange}
                    />
                    <TextField 
                        required 
                        name="last_name"
                        variant="outlined"
                        style={{ margin: 5 }}
                        label="Last Name" 
                        value={staffToEdit.last_name}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <Button 
                        id="addBttn" 
                        variant="outlined"
                        style={{ margin: 5, marginBottom: 20 }}
                        onClick={handleUpdate}
                    >
                        Update Staff
                    </Button>
                    <Button 
                        id="addBttn" 
                        color="error" 
                        variant="outlined"
                        style={{ margin: 5, marginBottom: 20 }}
                        onClick={handleDelete}
                    >
                        {staffToEdit.is_staff ? "Deactivate" : "Activate"}
                    </Button>
                </div>
            </Box>
            </Paper>
        </center>
    </>    
    );
}

export default EditStaff;
