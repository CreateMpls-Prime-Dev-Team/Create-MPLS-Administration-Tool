import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import {
    Box,
    TextField,
    InputLabel,
    MenuItem,
    FormControl,
    Select,
    Button,
    Typography
} from "@mui/material";

import AddIcon from "@mui/icons-material/Add";

const AddProgram = () => {
    let dispatch = useDispatch();

    let newProgram = {
        programName: '',
        programType: '',
        programLocation: ''
    };

    //Creating local states for drop down data storage
    const settings = useSelector(store => store.settings);
    const [addProgram, setAddProgram] = React.useState(newProgram);

    //Handles changes to the form and packs them into a single object.
    const handleAddProgramChange = (event) => {
        setAddProgram({...addProgram, [event.target.name]:event.target.value});
    }

    //Submitting new program to the database
    const handleAddProgram = () => {
        dispatch({
            type: 'ADD_PROGRAM',
            payload: addProgram
        })
        setAddProgram(newProgram);
    }

    return (
        <>
            <center>
                <Box style={{ width: '50%' }}>
                    <div>
                        <TextField 
                            required 
                            name="programName"
                            variant="outlined"
                            style={{ margin: 5, width: 400 }}
                            label="Program Name"
                            value={addProgram.programName}
                            onChange={handleAddProgramChange}
                        />
                    </div>
                    <FormControl>
                        <InputLabel>Type</InputLabel>
                        <Select
                            id="demo-simple-select"
                            label="Program Type"
                            name="programType"
                            style={{ margin: 5, width: 400 }}
                            value={addProgram.programType}
                            onChange={handleAddProgramChange}
                        >
                            {(Object.keys(settings).length > 0 ) ? settings.type.map((t)=> (
                                <MenuItem key={t.id} value={t.id}>{t.name}</MenuItem>
                            )) :
                                <MenuItem value={0}>Loading....</MenuItem>
                            }
                        </Select>
                    </FormControl>
                    <div>
                        <TextField 
                            required 
                            name="programLocation"
                            variant="outlined"
                            style={{ margin: 5, width: 400 }}
                            label="Location"
                            value={addProgram.programLocation}
                            onChange={handleAddProgramChange} 
                        />
                    </div>
                    <div>
                        <Button 
                            id="addBttn"
                            variant="outlined"
                            style={{ margin: 5, width: 400 }}
                            endIcon={<AddIcon />}
                            onClick={handleAddProgram}
                        >
                        Add Program
                        </Button>
                    </div>
                </Box>
            </center>
        </>
    )
}

export default AddProgram;
