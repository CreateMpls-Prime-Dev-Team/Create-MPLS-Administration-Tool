import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';
import { 
    Typography, 
    Select, 
    Container, 
    Box, 
    InputLabel, 
    MenuItem, 
    FormControl, 
    Checkbox, 
    Button, 
    TextField 
} from '@mui/material';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';

function AttendancePage() {
    const { id } = useParams();
    const history = useHistory();

    //local state for form
    const [date, setDate] = React.useState(null);
    const [duration, setDuration] = useState(0);
    const [volunteerCount, setVolunteerCount] = useState(0);

    //local state for dialog box
    const [open, setOpen] = useState(false);


    const submitAttendance = () => {
        //needs dispatch to server

        history.push('/teacher');
    };


    //function for handling opening/closing dialog box
    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
        history.push('/teacher');
    };
    

    return (
        <>
        <div>
        <img src="design_a.png" width="150" height="100"/>
        {/* HEADER - will need to GET this from DB */}
        <Typography variant="h4" align="left" sx={{ marginLeft: 3 }}>Learning Lab</Typography>
        <Typography variant="h5" align="left" sx={{ marginLeft: 3 }}>Hope Academy</Typography>
        </div>
        <center>
        {/* Date Picker */}
        <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
                label="Date"
                value={date}
                onChange={(newDate) => {setDate(newDate);}}
                renderInput={(params) => <TextField {...params} />}
            />
        </LocalizationProvider>
        <Container>
            <Box >
                <div>
                <FormControl sx={{m: 1, minWidth: 200}}>
                    <InputLabel>Duration (min)</InputLabel>
                    <Select
                        autoWidth
                        onChange={(event) => setDuration(event.target.value)}
                        >
                        <MenuItem value={15}>15</MenuItem>
                        <MenuItem value={30}>30</MenuItem>
                        <MenuItem value={45}>45</MenuItem>
                        <MenuItem value={60}>60</MenuItem>
                        <MenuItem value={75}>75</MenuItem>
                        <MenuItem value={90}>90</MenuItem>
                        <MenuItem value={105}>105</MenuItem>
                        <MenuItem value={120}>120</MenuItem>
                    </Select>
                </FormControl>
                </div>
                <div>
                <FormControl sx={{ m: 1, minWidth: 200 }}>
                    <InputLabel>Volunteers</InputLabel>
                    <Select
                        autoWidth
                        onChange={(event) => setVolunteerCount(event.target.value)}
                        >
                        <MenuItem value={1}>1</MenuItem>
                        <MenuItem value={2}>2</MenuItem>
                        <MenuItem value={3}>3</MenuItem>
                        <MenuItem value={4}>4</MenuItem>
                        <MenuItem value={5}>5</MenuItem>
                        <MenuItem value={6}>6</MenuItem>
                        <MenuItem value={7}>7</MenuItem>
                        <MenuItem value={8}>8</MenuItem>
                    </Select>
                </FormControl>
                </div>
            </Box>
            {/* student buttons go here*/}
        </Container>

        {/* Submit and Cancel buttons */}
        <div>
            <Button variant="outlined" size="large">CANCEL</Button>
            <Button variant="contained" size="large" onClick={handleClickOpen}>SUBMIT</Button>
            <Dialog
                open={open}
                onClose={handleClose}>
                <DialogTitle>{"Ready to submit attendance?"}</DialogTitle>
                    <DialogContent>
                        <DialogContentText></DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose}>
                            Cancel
                            </Button>
                        <Button onClick={submitAttendance} autoFocus>
                            Submit
                        </Button>
                    </DialogActions>
            </Dialog>
        </div>
        
        </center>
        </>
    )
}

export default AttendancePage;