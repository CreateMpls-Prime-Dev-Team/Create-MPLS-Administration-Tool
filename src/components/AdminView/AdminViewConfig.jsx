import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Box, TextField, Button, Typography } from "@mui/material";


function AdminViewConfig() {
    const [regCodeAdmin, setRegCodeAdmin]= useState('');
    const [regCodeTeacher, setRegCodeTeacher]= useState('');
    const dispatchEvent = useDispatch();

    const editAdminCode = (e) => {
        e.preventDefault();
        if(confirm('Are you sure you want to change the admin registration code?')){
            dispatchEvent({
                type: 'EDIT_ADMIN_CODE',
                payload: {
                    settingValue: regCodeAdmin,
                    settingVariable: 'adminCode'
                }
            });
        }
    };

    const editTeacherCode = (e) => {
        event.preventDefault();
        if(confirm('Are you sure you want to change the admin registration code?')){
            dispatchEvent({
                type: 'EDIT_TEACHER_CODE',
                payload: {
                    settingValue: regCodeTeacher,
                    settingVariable: 'teacherCode'
                }
            });
        }
    };
    
    return (
        <div style={{marginTop: 150}}>
            <Typography variant="h5">REGISTRATION CODES</Typography>
            <div className ="headerClass">
                <Typography variant="h6">Change Teacher Registration Code</Typography>
            </div>

            <Box
                component="form"
                sx={{
                    "& .MuiTextField-root": { width: "25ch" },
                }}
                noValidate
                autoComplete="off"
            >
                {/* Update Registration Code */}
                <TextField
                    id="outlined-required"
                    size="small"
                    onChange={(e) => {
                        setRegCodeTeacher(e.target.value);
                    }}
                    label="Current-Example123"
                />
                <Button id="addBttn" variant="outlined" onClick={editTeacherCode}>
                    Update
                </Button>
            </Box>


            <div className="headerClass">
                <Typography variant="h6">Change Admin Registration Code</Typography>
            </div>

            <Box
                component="form"
                sx={{
                    "& .MuiTextField-root": { width: "25ch" },
                }}
                noValidate
                autoComplete="off"
            >
                {/* Update Registration Code */}
                <TextField
                    id="outlined-required"
                    size="small"
                    onChange={(e) => {
                        setRegCodeAdmin(e.target.value);
                    }}
                    label="Current-Example123"
                />
                <Button id="addBttn" variant="outlined" onClick={editAdminCode}>
                    Update
                </Button>
            </Box>
        </div>
    );
}

export default AdminViewConfig;