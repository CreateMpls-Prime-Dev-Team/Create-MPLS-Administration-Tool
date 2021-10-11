import React, { useState } from 'react';
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useDispatch, useSelector } from 'react-redux';


function AdminViewConfig() {
    const [regCodeAdmin, setRegCodeAdmin]= useState('');
    const [regCodeTeacher, setRegCodeTeacher]= useState('');
    const dispatchEvent = useDispatch();

    const editAdminCode = (e) => {
        e.preventDefault();
        dispatchEvent({
            type: 'EDIT_ADMIN_CODE',
            payload: {
                settingValue: regCodeAdmin,
                settingVariable: 'adminCode'
            }
        });
    };

    const editTeacherCode = (e) => {
        event.preventDefault();
        dispatchEvent({
            type: 'EDIT_TEACHER_CODE',
            payload: {
                settingValue: regCodeTeacher,
                settingVariable: 'teacherCode'
            }
        });
    };
    
    return (
        <div>
            <div className ="headerClass">
                <h1>Edit Teacher Registration Code</h1>
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
                <h1>Edit Admin Registration Code</h1>
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