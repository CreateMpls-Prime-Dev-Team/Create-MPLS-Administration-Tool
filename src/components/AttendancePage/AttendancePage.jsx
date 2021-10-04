import React from "react";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material/';
import Typography from '@mui/material/Typography';
import Select from "@mui/material/Select";
import Container from "@mui/material/Container";
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';

function AttendancePage() {
    return (
        <>
        <h3>Take attendance!</h3>
        <Container>
            <center>
            <Box>
                <div>
                <FormControl sx={{ m: 1, minWidth: 200}}>
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
            </center>
        </Container>
        </>
    )
}

export default AttendancePage;