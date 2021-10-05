import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, TextField, Typography} from '@mui/material';

function RegisterForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [registrationCode, setRegistrationCode] = useState('');
  const errors = useSelector((store) => store.errors);
  const dispatch = useDispatch();

  const registerUser = (event) => {
    event.preventDefault();

    dispatch({
      type: 'REGISTER',
      payload: {
        username: username,
        password: password,
        first_name: firstName,
        last_name: lastName
      },
    });
  }; // end registerUser

  return (
    <form className="formPanel" onSubmit={registerUser}>
      <h2>Register User</h2>
      {errors.registrationMessage && (
        <h3 className="alert" role="alert">
          {errors.registrationMessage}
        </h3>
      )}
      <div>
        <label htmlFor="username">
          <TextField
            variant="outlined"
            name="username"
            placeholder="username"
            size="small"
            value={username}
            required
            onChange={(event) => setUsername(event.target.value)}
          />
        </label>
      </div>
      <div>
        <label htmlFor="password">
          <TextField
            variant="outlined"
            type="password"
            name="password"
            placeholder="password"
            size="small"
            value={password}
            required
            onChange={(event) => setPassword(event.target.value)}
          />
        </label>
      </div>
      <div>
        <label htmlFor="firstName">
          <TextField
            variant="outlined"
            name="firstName"
            placeholder="first name"
            size="small"
            value={firstName}
            required
            onChange={(event) => setFirstName(event.target.value)}
          />
        </label>
      </div>
      <div>
        <label htmlFor="lastName">
          <TextField
            variant="outlined"
            name="lastName"
            placeholder="last name"
            size="small"
            value={lastName}
            required
            onChange={(event) => setLastName(event.target.value)}
          />
        </label>
      </div>
      <div>
        <label htmlFor="registrationCode">
          <TextField
            variant="outlined"
            name="registrationCode"
            placeholder="registration code"
            size="small"
            value={registrationCode}
            required
            onChange={(event) => setRegistrationCode(event.target.value)}
          />
        </label>
      </div>
      <div>
        <Button 
          variant="contained"
          className="btn" 
          type="submit" 
          name="submit" 
          value="Register" 
          >Submit & Login</Button>
      </div>
    </form>
  );
}

export default RegisterForm;
