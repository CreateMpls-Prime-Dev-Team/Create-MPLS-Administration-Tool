const express = require('express');
const db = require('../modules/pool');
const router = express.Router();
const {  rejectUnauthenticated } = require('../modules/authentication-middleware');
const { default: axios } = require('axios');

router.get('/charts', rejectUnauthenticated, async (req,res) => {

    const ethnicityStatement = `
        SELECT
	        e.name as name,
            COUNT(s.ethnicity_id) total
        FROM student s
        JOIN ethnicity e
            ON ( s.ethnicity_id = e.id )
        GROUP BY e.name;
        `;

    const genderStatement = `
        SELECT
            g.name as name,
            COUNT(s.gender_id) total
        FROM student s
        JOIN gender g
            ON ( s.gender_id = g.id )
        GROUP BY g.name;
        `;

    const minutesStatement = `
        SELECT
            EXTRACT( MONTH FROM po.at_date ) AS month_number,
            SUM(duration) AS total_minutes
        FROM program_occurrence po
        JOIN student_program_attendance spa
            ON ( po.id = spa.occurrence_id )
        WHERE EXTRACT( YEAR FROM po.at_date ) = EXTRACT( YEAR FROM NOW())
        GROUP BY month_number
        ORDER BY month_number;
        `;

    try {

        const ethnicity = await db.query(ethnicityStatement);
        const gender = await db.query(genderStatement);
        const minutesByMonth = await db.query(minutesStatement);

        res.send({ 
            ethnicity: ethnicity.rows, 
            gender: gender.rows,
            minutesByMonth: minutesByMonth.rows,
        });

    } catch (error) {
        console.log('ERROR: dashboard', error);
        res.sendStatus(500);
    }
});

module.exports = router;
