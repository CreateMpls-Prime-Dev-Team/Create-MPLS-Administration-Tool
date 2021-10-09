import React, { useEffect } from "react";
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

import AddIcon from "@mui/icons-material/Add";

function AddStudent() {
  
  let dispatch = useDispatch();

  let newStudent = {
    firstName: '',
    lastName: '',
    genderId: '',
    gradeId: '',
    ethnicityId: '',
    age: ''
  };

  //Creating local states for drop down data storage
  const settings = useSelector(store => store.settings);
  const studentList = useSelector(store => store.student);
  const studentToEdit = useSelector(store => store.studentToEdit);
  const [addStudent, setAddStudent] = React.useState(newStudent);
  

  

  //Handles changes to the form and packs them into a single object.
  const handleAddStudentChange = (event) => {
    setAddStudent({...addStudent, [event.target.name]:event.target.value});
  }

  //Handles changes to the form and packs them into a single object.
  const handleUpdateStudentChange = (event) => {
    setEditStudent({...addStudent, [event.target.name]:event.target.value});
  }

  //Submitting new student to the database
  const handleAddStudent = () => {
    dispatch({
      type: 'ADD_STUDENT',
      payload: addStudent
    })
    setAddStudent(newStudent);
  }

  return (
    <div id="mainDiv">
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        {/* First Name */}
        <TextField 
          required 
          name="firstName"
          id="firstName"
          variant="outlined"
          required 
          label="First Name"
          value={addStudent.firstName}
          onChange={handleAddStudentChange}
        />
        {/* Last Name */}
        <TextField 
          required 
          name="lastName"
          id="lastName"
          variant="outlined"
          required  
          label="Last Name" 
          value={addStudent.lastName}
          onChange={handleAddStudentChange}
        />
        <TextField 
          required 
          name="age"
          id="age"
          variant="outlined"
          required
          label="Age" 
          value={addStudent.age}
          onChange={handleAddStudentChange}
        />

        {/* Grade Selection Drop-Down */}
        <span id="dropdown">
          <FormControl>
            <InputLabel id="gradSelect">Grade</InputLabel>
            <Select
              labelId="grade"
              name="gradeId"
              id="demo-simple-select"
              value={addStudent.gradeId}
              label="Grade"
              onChange={handleAddStudentChange}
            >
              {(Object.keys(settings).length > 0 ) ? settings.grade.map((gr)=> (
                  <MenuItem key={gr.id} value={gr.id}>{gr.name}</MenuItem>
              )) :
              <MenuItem value={0}>Loading....</MenuItem>
             }
            </Select>
          </FormControl>

          {/* Ethnicity Selection Drop-Down */}
          <FormControl>
            <InputLabel id="ethnicitySelect">Ethnicity</InputLabel>
            <Select
              labelId="ethnicity"
              name="ethnicityId"
              id="demo-simple-select"
              value={addStudent.ethnicityId}
              label="Ethnicity"
              onChange={handleAddStudentChange}
            >
              {(Object.keys(settings).length > 0 ) ? settings.ethnicity.map((e)=> (
                  <MenuItem key={e.id} value={e.id}>{e.name}</MenuItem>
              )) :
              <MenuItem value={0}>Loading....</MenuItem>
              }
            </Select>
          </FormControl>

          {/* Gender Selection Drop-Down */}
          <FormControl>
            <InputLabel id="genderSelect">Gender</InputLabel>
            <Select
              labelId="gender"
              name="genderId"
              id="demo-simple-select"
              value={addStudent.genderId}
              label="Gender"
              onChange={handleAddStudentChange}
            >
              {(Object.keys(settings).length > 0 ) ? settings.gender.map((ge)=> (
                  <MenuItem key={ge.id} value={ge.id}>{ge.name}</MenuItem>
              )) :
              <MenuItem value={0}>Loading....</MenuItem>
              }
            </Select>
          </FormControl>
          <Button 
            id="addBttn" 
            variant="outlined" 
            endIcon={<AddIcon />}
            onClick={handleAddStudent}
          >
            Add Student
          </Button>
        </span>
      </Box>
    </div>
  );
}

export default AddStudent;
