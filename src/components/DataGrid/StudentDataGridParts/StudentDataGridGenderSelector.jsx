import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { 
    Button, 
    Select, 
    MenuItem,
    FormControl,
    InputLabel 
} from '@mui/material';

const StudentDataGridGenderSelector = ({ cellValues }) => {
    const settings = useSelector(store => store.settings);

    const handleGenderChange = (id, value) => {
        console.log('Changing Gender', id, value);
    }

    return (
        <FormControl
                onChange={handleGenderChange(cellValues.id, cellValues.value)}
            >
            <Select
              value={cellValues.value}
              label="Gender"
              
            >
              {(Object.keys(settings).length > 0 ) ? settings.gender.map((row)=> (
                  <MenuItem key={row.id} value={row.id}>{row.name}</MenuItem>
              )) :
              <MenuItem value={0}>Loading....</MenuItem>
              }
            </Select>
          </FormControl>
    )
}

export default StudentDataGridGenderSelector;
