import react from "react";
import "./Staff.css";
import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";

function Staff() {
  //local state for drop-down
  const [assignedProgram, setassignedProgram] = React.useState("");
  const [registrationCode, setregistrationCode] = React.useState("");


  const handleProgram = (event) => {
    setassignedProgram(event.target.value);
  };

  return (
    <div>
      <div class="headerClass">
        <h1>Edit Staff</h1>
        <h1>*DROPDOWN STAFF SEARCH HERE*</h1>
        <ul>
          <li>Lego League X</li>
          <li>Lego League X</li>
          <li>Lego League X</li>
        </ul>
      </div>
      <br />
      <FormControl>
        <InputLabel id="demo-simple-select-label">Assign Program</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select2"
          value={assignedProgram}
          label="Grade"
          onChange={handleProgram}
        >
          <MenuItem value={"Robotics"}>Robotics</MenuItem>
          <MenuItem value={"Lego League"}>Lego League</MenuItem>
          <MenuItem value={"Math Lab"}>Math Lab</MenuItem>
        </Select>
      </FormControl>

      <Button id="addBttn" variant="outlined">
        Assign
      </Button>
      <br />
      <Button id="addBttn" color='error' variant="outlined">
        Delete Staff
      </Button>

      <div class="headerClass">
        <h1>Edit Registration Code</h1>
      </div>

      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        {/* Update Registration Code */}
        <TextField id="outlined-required" onChange={(e)=>{setregistrationCode(e.target.value)}} label="Current-Example123" />
        <Button id="addBttn" variant="outlined">
          Update
        </Button>
      </Box>
    </div>
  );
}

export default Staff;
