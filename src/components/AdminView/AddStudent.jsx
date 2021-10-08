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
import Typography from "@mui/material/Typography"
import AddIcon from "@mui/icons-material/Add";
import "./StudentSearch.css";
import SelectSearch from "react-select-search";
import { useRef } from "react";
import {useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux';

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
  const [editStudent, setEditStudent] = React.useState('');
  const [grade, setGrade] = React.useState("");
  const [ethnicity, setEthnicity] = React.useState("");
  const [gender, setGender] = React.useState("");

  

  useEffect(() => { 
    dispatch({ type: 'FETCH_STUDENT' });
  }, [])

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

  const handleGrade = (event) => {
    setGrade(event.target.value);
  };
  const handleEthnicity = (event) => {
    setEthnicity(event.target.value);
  };
  const handleGender = (event) => {
    setGender(event.target.value);
  };

  //START STUDENT SEARCH DROP DOWN FUNC
  function StudentSearch() {
    
    //Local state for student selection
    const [selectedStudentId, setselectedStudentId] = React.useState(studentToEdit.id);
    
    const searchInput2 = useRef();
    const studentList = useSelector(store => store.student)
    
    useEffect(() => {
      studentList.map((student) => {
        if(student.id === selectedStudentId){
           dispatch({
             type: 'SET_STUDENT_TO_EDIT',
             payload: student
           })
        }
      });
    }, [selectedStudentId])

    let items = []; // create a list of students
    studentList.map((student) => {
      items.push({ // push each student from the list in a formatted object
        name: `${student.first_name} ${student.last_name}`, 
        value: student.id})
    })

    const options2 = [ // To render menu
      {
        type: "group",
        name: "Student Names",
        items
      }
    ];
  
    const handleFilter = (items) => {
      return (searchValue) => {
        if (searchValue.length === 0) {
          return options2;
        }
        const updatedItems = items.map((list) => {
          const newItems = list.items.filter((item) => {
            return item.name.toLowerCase().includes(searchValue.toLowerCase());
          });
          return { ...list, items: newItems };
        });
        return updatedItems;
      };
    };
  
   
    return (
      <div className="App">
        <SelectSearch
          ref={searchInput2}
          options={options2}
          filterOptions={handleFilter}
          value={selectedStudentId}
          name="Student-Search"
          placeholder="Choose a student"
          search
          onChange={setselectedStudentId}
        />
      </div>
    );
  }
//END STUDENT SEARCH DROPDOWN
  return (
    <div id="mainDiv">
      <div id="headerOne">
        <Typography variant="h4">Add Student</Typography>
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
        <TextField 
          required 
          name="firstName"
          id="outlined-required" 
          label="First Name"
          value={addStudent.firstName}
          onChange={handleAddStudentChange}
        />
        {/* Last Name */}
        <TextField 
          required 
          name="lastName"
          id="outlined-required" 
          label="Last Name" 
          value={addStudent.lastName}
          onChange={handleAddStudentChange}
        />
        <TextField 
          required 
          name="age"
          id="outlined-required" 
          label="Age" 
          value={addStudent.age}
          onChange={handleAddStudentChange}
        />

        {/* Grade Selection Drop-Down */}
        <span id="dropdown">
          <FormControl>
            <InputLabel id="demo-simple-select-label">Grade</InputLabel>
            <Select
              labelId="demo-simple-select-label"
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
            <InputLabel id="demo-simple-select-label">Ethnicity</InputLabel>
            <Select
              labelId="demo-simple-select-label"
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
            <InputLabel id="demo-simple-select-label">Gender</InputLabel>
            <Select
              labelId="demo-simple-select-label"
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
        {/* Student Search */}
      <div id="headerTwo">
        <Typography variant="h4">Edit Student</Typography>
      </div>
      <StudentSearch/>


      {/* Update Grade */}
      <span id="dropdownTwo">
        <FormControl>
          <InputLabel id="demo-simple-select-label">Update Grade</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select2"
            value={studentToEdit.grade_id}
            label="Grade"
            name="gradeId"
            onChange={handleUpdateStudentChange}
          >
            {(Object.keys(settings).length > 0 ) ? settings.grade.map((gr)=> (
                  <MenuItem key={gr.id} value={gr.id}>{gr.name}</MenuItem>
              )) :
              <MenuItem value={0}>Loading....</MenuItem>
             }
          </Select>
        </FormControl>

        {/* Update Ethnicity  */}
        <FormControl>
          <InputLabel id="demo-simple-select-label">
            Update Ethnicity
          </InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select2"
            value={studentToEdit.ethnicity_id}
            label="Ethnicity"
            onChange={handleUpdateStudentChange}
          >
            {(Object.keys(settings).length > 0 ) ? settings.ethnicity.map((e)=> (
                  <MenuItem key={e.id} value={e.id}>{e.name}</MenuItem>
              )) :
              <MenuItem value={0}>Loading....</MenuItem>
              }
          </Select>
        </FormControl>

        {/* Update Gender */}
        <FormControl>
          <InputLabel id="demo-simple-select-label">Update Gender</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select2"
            value={studentToEdit.gender_id}
            label="Gender"
            onChange={handleUpdateStudentChange}
          >
            {(Object.keys(settings).length > 0 ) ? settings.gender.map((ge)=> (
                  <MenuItem key={ge.id} value={ge.id}>{ge.name}</MenuItem>
              )) :
              <MenuItem value={0}>Loading....</MenuItem>
              }
          </Select>
        </FormControl>
        <Button id="addBttn" variant="outlined">
          Update Student
        </Button>
        <Button id="addBttn" color="error" variant="outlined">
          Delete Student
        </Button>
      </span>
    </div>
  );
}

export default AddStudent;
