import React from 'react';
import { Link } from 'react-router-dom';
import LogOutButton from '../LogOutButton/LogOutButton';
import './Nav.css';
import { useSelector } from 'react-redux';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

function Nav() {
  const user = useSelector((store) => store.user);

  return (
    <div className="nav">
      <Link to="/user">
        <img src="design_b.png" className="nav-title" width="100"/>
        {/* <Typography variant="h3" className="nav-title">CreateMPLS Portal</Typography> */}
      </Link>
      <div>
        {/* If no user is logged in, show these links */}
        {user.id === null &&
          // If there's no user, show login/registration links
          <Link className="navLink" to="/login">
            Login / Register
          </Link>
        }

        {/* If a user is logged in, show these links */}
        {user.id && (
          <>
            <Link className="navLink" to="/add-student">
              STUDENTS
            </Link>

            <Link className="navLink" to="/program">
              PROGRAMS
            </Link>

            <Link className="navLink" to="/staff">
              STAFF
            </Link>

            {/* <Link className="navLink" to="/info">
              Info
            </Link> */}

            {/* <Link className="navLink" to="/teacher">
              <Button variant="outlined">Teacher Portal</Button>
            </Link> */}

            <LogOutButton className="btn" />
          </>
        )}

        {/* <Link className="navLink" to="/about">
          About
        </Link> */}
      </div>
    </div>
  );
}

export default Nav;
