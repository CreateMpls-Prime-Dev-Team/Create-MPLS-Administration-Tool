import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material/';
import { Typography, IconButton } from '@mui/material';
import LogOutButton from '../LogOutButton/LogOutButton';
import PlaylistAddCheckIcon from '@mui/icons-material/PlaylistAddCheck';

function TeacherPortal() {
    const dispatch = useDispatch();
    const history = useHistory();
    const user = useSelector(store => store.user);
    const programs = useSelector(store => store.programsByTeacher);

    useEffect(() => {
        dispatch({ type: 'FETCH_PROGRAMS_BY_TEACHER'});
    }, [])
    
    const onAttendanceButton = () => {
        console.log('button is being pressed')
    }

    return (
        <>
        <img src="design_a.png" width="400" height="300"/>
        <Typography variant="h4" align="left" sx={{ marginLeft: 3}}>{user.first_name} {user.last_name}</Typography>
        <center>
            <TableContainer sx={{ maxWidth: 350, marginBottom: 5, marginTop: 5 }} component={Paper}>
                <Table aria-label="program list">
                    <TableHead>
                        <TableRow>
                            <TableCell sx={{ fontSize: 20}}>PROGRAM</TableCell>
                            <TableCell align="center" sx={{ fontSize: 20 }}>LOCATION</TableCell>
                            <TableCell></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        { Object.keys(programs).length > 0 && programs.map((prg) => (
                            <TableRow
                                key={prg.id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                <TableCell align="left" sx={{ fontSize: 18 }}>{prg.name}</TableCell>
                                <TableCell align="center" sx={{ fontSize: 18 }}>{prg.location}</TableCell>
                                <TableCell ><IconButton onClick={onAttendanceButton}><PlaylistAddCheckIcon/></IconButton></TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

            <LogOutButton />
        </center>
        </>
    )
}

export default TeacherPortal;