import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material/';
import { Typography, IconButton, Container } from '@mui/material';
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
    
    const onAttendanceButton = (id) => {
        dispatch({ type: 'SET_PROGRAM_OCCURRENCE', payload: { id, history } })
    }

    const onEditAttendance = () => {
        console.log('editing attendance!');
    }

    return (
        <>
        <Container sx={{ width: 370 }}>
            <img src="design_a.png" width="400" height="250"/>
            <Typography variant="h4" align="left" sx={{ marginLeft: 2, marginBottom: 2}}>{user.first_name} {user.last_name}</Typography>
        </Container>
        <center>
            <Paper elevation={12} sx={{ width: 370 }}>
            <Typography variant="h5" sx={{ marginBottom: -4, marginTop: 3 }}>MY PROGRAMS</Typography>
            <TableContainer sx={{ maxWidth: 350, marginBottom: 5, marginTop: 5 }}>
                <Table aria-label="program list">
                    <TableHead sx={{ borderBottom: 3, borderColor: 'grey.500' }}>
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
                                sx={{ '&:last-child td, &:last-child th': { borderBottom: 3, borderColor: 'grey.500' } }}
                                >
                                <TableCell align="left" sx={{ fontSize: 18 }}>{prg.name}</TableCell>
                                <TableCell align="left" sx={{ fontSize: 18 }}>{prg.location}</TableCell>
                                <TableCell ><IconButton onClick={() => onAttendanceButton(prg.id)}><PlaylistAddCheckIcon/></IconButton></TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            </Paper>

            <Paper elevation={12} sx={{ width: 370 }}>
                <Typography variant="h5" sx={{ marginBottom: -4, marginTop: 2 }}>RECENT ATTENDANCE</Typography>
                <TableContainer sx={{ maxWidth: 350, marginBottom: 5, marginTop: 5 }}>
                <Table aria-label="recent attendance">
                    <TableHead sx={{ borderBottom: 3, borderColor: 'grey.500' }}>
                        <TableRow>
                            <TableCell sx={{ fontSize: 20}}>DATE</TableCell>
                            <TableCell sx={{ fontSize: 20}}>PROGRAM</TableCell>
                            <TableCell align="center" sx={{ fontSize: 20 }}>LOCATION</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        { Object.keys(programs).length > 0 && programs.map((prg) => (
                            <TableRow
                                key={prg.id}
                                sx={{ '&:last-child td, &:last-child th': { borderBottom: 3, borderColor: 'grey.500' } }}
                                onClick={onEditAttendance}
                                >
                                <TableCell align="left" sx={{ fontSize: 18 }}>{prg.date}</TableCell>
                                <TableCell align="left" sx={{ fontSize: 18 }}>{prg.name}</TableCell>
                                <TableCell align="left" sx={{ fontSize: 18 }}>{prg.location}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            </Paper>
            <LogOutButton />
        </center>
        </>
    )
}

export default TeacherPortal;