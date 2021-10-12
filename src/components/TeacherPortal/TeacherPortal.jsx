import React from 'react';
import { Link } from 'react-router-dom';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material/';
import Typography from '@mui/material/Typography';
import LogOutButton from '../LogOutButton/LogOutButton';

function TeacherPortal() {
    return (
        <>
        <img src="design_a.png" width="400" height="300"/>
        <Typography variant="h4">Thomas Teacher</Typography>
        <center>
            <TableContainer sx={{ maxWidth: 350 }} component={Paper}>
                <Table aria-label="program list">
                <TableHead>
                    <TableRow>
                        <TableCell>PROGRAM</TableCell>
                        <TableCell align="right">LOCATION</TableCell>
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
                        <TableCell><Link to="/attendance">Learning Lab</Link></TableCell>
                        <TableCell align="right">Hope Academy</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Lego League</TableCell>
                        <TableCell align="right">Hope Academy</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>CoderZ</TableCell>
                        <TableCell align="right">Urban Ventures</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
        <LogOutButton />
        </center>
        </>
    )
}

export default TeacherPortal;