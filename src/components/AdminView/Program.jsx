import react from 'react'
import './Program.css'
import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";

function Program() {

    //local states for drop-down
    const [programType, setprogramType] = React.useState('')
return (
    <>
    <h1>Add Program</h1>

    <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        {/* Program Name */}
        <TextField required id="outlined-required" label="Program Name" />

        {/* Grade Selection Drop-Down */}
          <FormControl>
            <InputLabel id="demo-simple-select-label">Type</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={programType}
              label="Program Type"
              onChange={(e)=>setprogramType(e.target.value)}
            >
              <MenuItem value={1}>League</MenuItem>
              <MenuItem value={2}>Class</MenuItem>
              <MenuItem value={3}>After-School</MenuItem>
            </Select>
          </FormControl>

           {/* Location */}
        <TextField required id="outlined-required" label="Location" />
        <Button id="addBttn" variant="outlined">
          Add Program
        </Button>
          </Box>

          <h1>Edit Existing Program</h1>
          <h5>*Program Search Drop-Down HERE*</h5>
          <Button id="addBttn" color = "error" variant="outlined">
          Delete Program
        </Button>
          <h2>Add Students to Class</h2>
          <h5>*Student Search Drop-Down HERE*</h5>
          <Button id="addBttn" variant="outlined">
          Add Student
        </Button>
</>
)
}

export default Program;