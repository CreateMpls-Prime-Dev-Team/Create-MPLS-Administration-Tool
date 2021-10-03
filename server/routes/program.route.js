const express = require('express');
const db = require('../modules/pool');
const router = express.Router();
const {  rejectUnauthenticated } = require('../modules/authentication-middleware');

/**
 * GET /api/program/record/:id
 */
 router.get('/record/:id', rejectUnauthenticated, (req, res) => {
  
  const statement = `
    SELECT
      p.name,
      p.location,
      p.type_id,
      t.name type_name
    FROM program p
    JOIN type t
      ON ( t.id = p.type_id )
    WHERE p.id = $1;
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

/**
 * POST add program
 * 
 */
 router.post('/add', rejectUnauthenticated, (req, res) => {
  
  let params = [ 
    req.body.name, 
    req.body.location,
    req.body.typeId
  ];

  const statement = `
    INSERT INTO program
      ( name, location, type_id )
    VALUES
      ( $1, $2, $3 );
  `;

  db.query(statement, params)
  .then( result => {
    res.sendStatus(201);
  })
  .catch(err => {
    console.log('ERROR - post:/api/program/add', err);
    res.sendStatus(500);
  });
});

/**
 * POST add program
 * 
 */
 router.post('/assign-teacher', rejectUnauthenticated, (req, res) => {
  
  let params = [ 
    req.body.userId, 
    req.body.programId
  ];

  const statement = `
    INSERT INTO staff_program_assignment
      ( user_id, program_id )
    VALUES
      ( $1, $2 );
  `;

  db.query(statement, params)
  .then( result => {
    res.sendStatus(201);
  })
  .catch(err => {
    console.log('ERROR - post:/api/program/add', err);
    res.sendStatus(500);
  });
});

module.exports = router;
