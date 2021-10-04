import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';
import Typography from '@mui/material/Typography';
import Select from "@mui/material/Select";
import Container from "@mui/material/Container";
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Checkbox from '@mui/material/Checkbox';
import Button from "@mui/material/Button";
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';

function AttendancePage() {
    const history = useHistory();

    //local state for form
    //still need to handle clicking checkboxes
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
    };
    

    return (
        <>
        {/* HEADER - will need to GET this from DB */}
        <Typography variant="h4">Learning Lab</Typography>
        <Typography variant="h5">Hope Academy</Typography>

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

        {/* Upper form */}
        <Container>
            <Box>
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

            {/* List of students (will need to GET from DB) */}
            <TableContainer component={Paper}>
                <Table aria-label="program list">
                    <TableHead>
                        <TableRow>
                            <TableCell></TableCell>
                            <TableCell>STUDENT</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {/* {rows.map((row) => (
                            <TableRow
                                key={row.name}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                <TableCell component="th" scope="row"></TableCell>
                                <TableCell align="right"></TableCell>
                                <TableCell align="right"></TableCell>
                            </TableRow>
                        ))} */}
                        <TableRow>
                            <TableCell><Checkbox/></TableCell>
                            <TableCell>Sammy Student</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell><Checkbox/></TableCell>
                            <TableCell>Suzie Student</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell><Checkbox/></TableCell>
                            <TableCell>Stevie Student</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
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