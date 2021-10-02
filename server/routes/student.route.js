const express = require('express');
const db = require('../modules/pool');
const router = express.Router();
const {  rejectUnauthenticated } = require('../modules/authentication-middleware');

/**
 * GET /api/student/record/:id
 */
router.get('/record/:id', rejectUnauthenticated, (req, res) => {
  
    const statement = `
      SELECT
        s.first_name,
        s.last_name,
        s.gender_id,
        s.age,
        ge.name gender,
        s.grade_id,
        gr.name grade,
        s.ethnicity_id,
        e.name ethnicity,
        is_active
      FROM student s
      JOIN gender ge
        ON ( ge.id = s.gender_id )
      JOIN grade gr
        ON ( gr.id = s.grade_id )
      JOIN ethnicity e
        ON ( e.id = s.ethnicity_id )
      WHERE s.id = $1
      AND is_active = TRUE;
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
 * POST add student
 * 
 * example of input
 * 
 * {
 *  "firstName": "Bob",
 *  "lastName": "Builder",
 *  "genderId": "1",
 *  "gradeId": "2",
 *  "ethnicityId": "2"
 *  }
 */
router.post('/add', rejectUnauthenticated, (req, res) => {
  
  let params = [ 
    req.body.firstName, 
    req.body.lastName,
    req.body.genderId,
    req.body.gradeId,
    req.body.ethnicityId 
  ];

  const statement = `
    INSERT INTO student
      ( first_name, last_name, gender_id, grade_id, ethnicity_id )
    VALUES
      ( $1, $2, $3, $4, $5 );
  `;

  db.query(statement, params)
  .then( result => {
    res.sendStatus(201);
  })
  .catch(err => {
    console.log('ERROR - post:/api/student/add', err);
    res.sendStatus(500);
  });
});

/**
 * PUT update student
 * 
 * example of input
 * 
 * {
 *  "firstName": "Bob",
 *  "lastName": "Tables",
 *  "genderId": "1",
 *  "gradeId": "2",
 *  "ethnicityId": "2"
 *  }
 */
 router.put('/update/:id', rejectUnauthenticated, (req, res) => {
  
  let params = [ 
    req.body.firstName, 
    req.body.lastName,
    req.body.genderId,
    req.body.gradeId,
    req.body.ethnicityId,
    req.params.id 
  ];

  const statement = `
    UPDATE student
    SET
      first_name = $1, 
      last_name = $2, 
      gender_id = $3, 
      grade_id = $4, 
      ethnicity_id = $5
    WHERE id = $6
  `;

  db.query(statement, params)
  .then( result => {
    res.send(result.rows);
  })
  .catch(err => {
    console.log('ERROR - get:/api/student/update/:id', err);
    res.sendStatus(500)
  });
});


// Toggles state of is_active
router.put('/toggle-active/:id', rejectUnauthenticated, (req, res) => {
  
  const statement = `
    UPDATE student
    SET
      is_active = NOT is_active
    WHERE id = $1
  `;

  db.query(statement, [ req.params.id ])
  .then( result => {
    res.sendStatus(200);
  })
  .catch(err => {
    console.log('ERROR - get:/api/student/update/:id', err);
    res.sendStatus(500)
  });
});

module.exports = router;
