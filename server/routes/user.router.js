const express = require('express');
const {
  rejectUnauthenticated,
} = require('../modules/authentication-middleware');
const encryptLib = require('../modules/encryption');
const pool = require('../modules/pool');
const userStrategy = require('../strategies/user.strategy');

const router = express.Router();

// Handles Ajax request for user information if user is authenticated
router.get('/', rejectUnauthenticated, (req, res) => {
  // Send back user object from the session (previously queried from the database)
  res.send(req.user);
});

// Handles POST request with new user data
// The only thing different from this and every other post we've seen
// is that the password gets encrypted before being inserted
router.post('/register', (req, res, next) => {
  const username = req.body.username;
  const password = encryptLib.encryptPassword(req.body.password);

  const queryText = `INSERT INTO "user" (username, password)
    VALUES ($1, $2) RETURNING id`;
  pool
    .query(queryText, [username, password])
    .then(() => res.sendStatus(201))
    .catch((err) => {
      console.log('User registration failed: ', err);
      res.sendStatus(500);
    });
});

// Handles login form authenticate/login POST
// userStrategy.authenticate('local') is middleware that we run on this route
// this middleware will run our POST if successful
// this middleware will send a 404 if not successful
router.post('/login', userStrategy.authenticate('local'), (req, res) => {
  res.sendStatus(200);
});

// clear all server session information about this user
router.post('/logout', (req, res) => {
  // Use passport's built-in method to log out the user
  req.logout();
  res.sendStatus(200);
});

router.put('/toggle-staff/:id', rejectUnauthenticated, (req, res) => {
  
  const statement = `
    UPDATE student
    SET
      is_staff = NOT is_staff
    WHERE id = $1
  `;

  db.query(statement, [ req.params.id ])
  .then( result => {
    res.sendStatus(200);
  })
  .catch(err => {
    console.log('ERROR - get:/api/user/toggle-staff/:id', err);
    res.sendStatus(500)
  });
});

router.put('/toggle-admin/:id', rejectUnauthenticated, (req, res) => {
  
  const statement = `
    UPDATE student
    SET
      is_admin = NOT is_admin
    WHERE id = $1
  `;

  db.query(statement, [ req.params.id ])
  .then( result => {
    res.sendStatus(200);
  })
  .catch(err => {
    console.log('ERROR - get:/api/user/toggle-admin/:id', err);
    res.sendStatus(500)
  });
});

router.get('/teacher-records', rejectUnauthenticated, (req, res) => {
  
  const statement = `
    SELECT
      u.id,
      u.username,
      u.first_name,
      u.last_name,
      u.is_staff,
      u.is_admin,
      u.updated_on,
      u.created_on
    FROM "user" u
    WHERE u.is_staff;
    `;

  db.query(statement, [ req.params.id ])
  .then( result => {
    res.send(result.rows);
  })
  .catch(err => {
    console.log('ERROR - get:/api/student/record/:id', err);
    res.sendStatus(500)
  });
  
});

module.exports = router;
