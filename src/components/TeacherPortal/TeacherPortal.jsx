import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material/';
import Typography from '@mui/material/Typography';

function TeacherPortal() {
    return (
        <>
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
                        <TableCell>Lego League</TableCell>
                        <TableCell align="right">Hope Academy</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Learning Lab</TableCell>
                        <TableCell align="right">Hope Academy</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>CoderZ</TableCell>
                        <TableCell align="right">Urban Ventures</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
        </center>
        </>
    )
}

export default TeacherPortal;