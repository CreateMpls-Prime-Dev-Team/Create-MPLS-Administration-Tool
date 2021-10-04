import react from "react";
import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import "./AddStudent.css";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";

function AddStudent() {
  //Creating local states for drop down data storage
  const [grade, setGrade] = React.useState("");
  const [ethnicity, setEthnicity] = React.useState("");
  const [gender, setGender] = React.useState("");

  const handleGrade = (event) => {
    setGrade(event.target.value);
  };
  const handleEthnicity = (event) => {
    setEthnicity(event.target.value);
  };
  const handleGender = (event) => {
    setGender(event.target.value);
  };
  return (
    <div id="mainDiv">
      <div id="headerOne">
        <h1>Add Student</h1>
      </div>

      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        {/* First Name */}
        <TextField required id="outlined-required" label="First Name" />
        {/* Last Name */}
        <TextField required id="outlined-required" label="Last Name" />

        {/* Grade Selection Drop-Down */}
        <span id="dropdown">
          <FormControl>
            <InputLabel id="demo-simple-select-label">Grade</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={grade}
              label="Grade"
              onChange={handleGrade}
            >
              <MenuItem value={1}>1st Grade</MenuItem>
              <MenuItem value={2}>2nd Grade</MenuItem>
              <MenuItem value={3}>3rd Grade</MenuItem>
            </Select>
          </FormControl>

          {/* Ethnicity Selection Drop-Down */}
          <FormControl>
            <InputLabel id="demo-simple-select-label">Ethnicity</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={ethnicity}
              label="Ethnicity"
              onChange={handleEthnicity}
            >
              <MenuItem value={"Somali"}>Somali</MenuItem>
              <MenuItem value={"Hispanic"}>Hispanic</MenuItem>
              <MenuItem value={"Caucasian"}>Caucasian</MenuItem>
            </Select>
          </FormControl>

          {/* Gender Selection Drop-Down */}
          <FormControl>
            <InputLabel id="demo-simple-select-label">Gender</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={gender}
              label="Gender"
              onChange={handleGender}
            >
              <MenuItem value={"Male"}>Male</MenuItem>
              <MenuItem value={"Female"}>Female</MenuItem>
            </Select>
          </FormControl>
          <Button id="addBttn" variant="outlined" endIcon={<AddIcon />}>
            Add Student
          </Button>
        </span>
      </Box>

      <div id="headerTwo">
        <h1>Edit Student</h1>
      </div>

      <h1>*DROPDOWN STUDENT SEARCH HERE*</h1>

      {/* Update Grade */}
      <span id="dropdownTwo">
        <FormControl>
          <InputLabel id="demo-simple-select-label">Update Grade</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select2"
            value={grade}
            label="Grade"
            onChange={handleGrade}
          >
            <MenuItem value={1}>1st Grade</MenuItem>
            <MenuItem value={2}>2nd Grade</MenuItem>
            <MenuItem value={3}>3rd Grade</MenuItem>
          </Select>
        </FormControl>

        {/* Update Ethnicity  */}
        <FormControl>
          <InputLabel id="demo-simple-select-label">Update Ethnicity</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select2"
            value={ethnicity}
            label="Ethnicity"
            onChange={handleEthnicity}
          >
            <MenuItem value={"Somali"}>Somali</MenuItem>
            <MenuItem value={"Hispanic"}>Hispanic</MenuItem>
            <MenuItem value={"Caucasian"}>Caucasian</MenuItem>
          </Select>
        </FormControl>

        {/* Update Gender */}
        <FormControl>
          <InputLabel id="demo-simple-select-label">Update Gender</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select2"
            value={gender}
            label="Gender"
            onChange={handleGender}
          >
            <MenuItem value={"Male"}>Male</MenuItem>
            <MenuItem value={"Female"}>Female</MenuItem>
          </Select>
        </FormControl>
        <Button id="addBttn" variant="outlined">
          Update Student
        </Button>
        <Button id="addBttn" color='error' variant="outlined">
          Delete Student
        </Button>
      </span>
    </div>
  );
}

export default AddStudent;
