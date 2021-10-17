import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import LogOutButton from '../LogOutButton/LogOutButton';
import './Nav.css';






function Nav() {
  const user = useSelector((store) => store.user);

  return (
    <div className="nav">
      <Link to="/user">
        <img src="design_b.png" className="nav-title" width="150"/>
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
            <Link className="navLink" to="/dashboard">
              DASHBOARD
            </Link>

            <Link className="navLink" to="/add-student">
              STUDENTS
            </Link>

            <Link className="navLink" to="/program">
              PROGRAMS
            </Link>

            <Link className="navLink" to="/staff">
              STAFF
            </Link>

            <LogOutButton className="btn" />
          </>
        )}
      </div>
    </div>
  );
}

export default Nav;
