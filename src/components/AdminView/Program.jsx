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
import "./StudentSearch.css";
import SelectSearch from "react-select-search";
import { useRef } from "react";
import {useEffect} from 'react'

function Program() {
//DROP DOWN PROGRAM MENU STUFF
    //local states for drop-down
    const [programType, setprogramType] = React.useState('')

    function ProgramSearch() {
      //Local state for student selection
      const [selectedStudent, setselectedStudent] = React.useState(0)
      console.log("this is selcted student", selectedStudent);
      const searchInput = useRef();
      const options = [
        {
          type: "group",
          name: "North Minneapolis",
          items: [
            { name: "Lego League", ethnicity: "black", value: "1" },
            { name: "Robotics", value: "2" }
          ]
        },
        {
          type: "group",
          name: "South Minneapolis",
          items: [
            { name: "Lego League", value: "3" },
            { name: "Robotics", value: "4" },
            { name: "Roshmotics", value: "5" }
          ]
        }
      ];
    
      const handleFilter = (items) => {
        return (searchValue) => {
          if (searchValue.length === 0) {
            return options;
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
            ref={searchInput}
            options={options}
            filterOptions={handleFilter}
            value={selectedStudent}
            name="Student-Search"
            placeholder="Select a program"
            search
            onChange={setselectedStudent}
          />
        </div>
      );
    }
    //END OF PROGRAM DROP DOWN STUFF
//START OF STUDENT SEARCH DROP DOWN
function StudentSearch() {
  //Local state for student selection
  const [selectedStudent, setselectedStudent] = React.useState(0)
  console.log("this is selcted student", selectedStudent);
  const searchInput2 = useRef();
  const options2 = [
    {
      type: "group",
      name: "Student Names",
      items: [
        { name: "Brad Johansen", value: "1" },
        { name: "Alex Goldberg", value: "2" },
        { name: "Chris F", value: "3" },
        { name: "Yung Curtis", value: "4" }

      ]
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
        value={selectedStudent}
        name="Student-Search"
        placeholder="Choose a student"
        search
        onChange={setselectedStudent}
      />
    </div>
  );
}
//END STUDENT SEARCH DROPDOWN
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
          <div id = "oneLine">
          <ProgramSearch/>

          <Button id="deleteBttn" color = "error" variant="outlined">
          Delete Program
        </Button>
        </div>
          <h2>Add Students to Class</h2>
          <StudentSearch/>
            <Button id="addBttn" variant="outlined">
          Add Student
        </Button>
</>
)
}

export default Program;