const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/', (req, res) => {
  // GET route code here
});

/**
 * POST add program
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

module.exports = router;
