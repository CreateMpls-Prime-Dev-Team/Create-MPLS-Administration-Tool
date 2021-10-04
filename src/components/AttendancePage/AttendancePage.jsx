import React, { useEffect, useState } from 'react';
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


function AttendancePage() {
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    
    return (
        <>
        <Typography variant="h4">Learning Lab</Typography>
        <Typography variant="h5">Hope Academy</Typography>
        <center>
        <Container>
            <Box>
                <div>
                <FormControl sx={{m: 1, minWidth: 200}}>
                    <InputLabel>Duration (min)</InputLabel>
                    <Select
                        autoWidth
                        >
                        <MenuItem>15</MenuItem>
                        <MenuItem>30</MenuItem>
                        <MenuItem>45</MenuItem>
                        <MenuItem>60</MenuItem>
                        <MenuItem>75</MenuItem>
                        <MenuItem>90</MenuItem>
                        <MenuItem>105</MenuItem>
                        <MenuItem>120</MenuItem>
                    </Select>
                </FormControl>
                </div>
                <div>
                <FormControl sx={{ m: 1, minWidth: 200 }}>
                    <InputLabel>Volunteers</InputLabel>
                    <Select
                        autoWidth
                        >
                        <MenuItem>1</MenuItem>
                        <MenuItem>2</MenuItem>
                        <MenuItem>3</MenuItem>
                        <MenuItem>4</MenuItem>
                        <MenuItem>5</MenuItem>
                        <MenuItem>6</MenuItem>
                        <MenuItem>7</MenuItem>
                        <MenuItem>8</MenuItem>
                    </Select>
                </FormControl>
                </div>
            </Box>
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
        <div>
            <Button variant="outlined">CANCEL</Button>
            <Button variant="contained" onClick={handleClickOpen}>SUBMIT</Button>
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
                        <Button autoFocus>
                            Submit Scores
                        </Button>
                    </DialogActions>
            </Dialog>
        </div>
        </center>
        </>
    )
}

export default AttendancePage;