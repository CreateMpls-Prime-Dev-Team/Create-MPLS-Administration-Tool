const express = require('express');
const db = require('../modules/pool');
const router = express.Router();
const {  rejectUnauthenticated } = require('../modules/authentication-middleware');

/**
 * GET route template
 */
router.get('/records/by-program-occurrence/:id', rejectUnauthenticated, (req, res) => {
    const statement = `
    SELECT
        s.id student_id,
        spa.occurrence_id occurrence_id,
        spa.created_on created_on,
        s.first_name first_name,
        s.last_name last_name
    FROM student_program_attendance spa
    JOIN student s
        ON (s.id = spa.student_id)
    WHERE spa.occurrence_id = $1
    `;

  db.query(statement, [ req.params.id ])
  .then( result => {
    res.send(result.rows);
  })
  .catch(err => {
    console.log('ERROR - get:/api/attendance/record/:id', err);
    res.sendStatus(500)
  });
});


/**
 * POST toggle student attendance
 */
router.post('/toggle', rejectUnauthenticated, async (req, res) => {
    //Same params for all queries
    const params = [ req.body.studentId, req.body.occurrenceId ];
    // Contains the decided query
    let queryStatement = '';

    // Find out if record exists, 
        // delete statement if true, 
        // create statement if false
        
    try {
        const statement = `
            SELECT id 
            FROM student_program_attendance
            WHERE student_id = $1
            AND occurrence_id = $2;
            `;

        const results = await db.query(statement, params);

        if ( results.rows.length > 0 ) {
            queryStatement = `
                DELETE FROM student_program_attendance
                WHERE student_id = $1
                AND occurrence_id = $2`;
        } else {
            queryStatement = `
                INSERT INTO student_program_attendance
                    ( student_id, occurrence_id )
                VALUES
                    ( $1, $2 )`;
        }
        
    } catch (error) {
        console.log('Error on attendance check', error);
        res.sendStatus(500);
    }
    
    // Finalize the decided query.
    try {
        const results = await db.query(queryStatement, params);
        res.sendStatus(200);
    } catch (error) {
        console.log('Error on attendance toggle', error);
        res.sendStatus(500);
    }
    
});

module.exports = router;
