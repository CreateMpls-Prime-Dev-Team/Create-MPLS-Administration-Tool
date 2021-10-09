import react, { useEffect } from "react";
import * as React from "react";
import { useSelector, useDispatch } from 'react-redux';
import StudentSearch from "../Search/studentSearch";
import{ 
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

const EditStudent = () => {
    const studentToEdit = useSelector(store => store.studentToEdit);

  const settings = useSelector(store => store.settings);
    return (
        <div>
            {/* Update Grade */}
<span id="dropdownTwo">
<FormControl>
  <InputLabel id="demo-simple-select-label">Update Grade</InputLabel>
  <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select2"
    value={studentToEdit.grade_id}
    label="Grade"
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
    )
}

export default EditStudent;
