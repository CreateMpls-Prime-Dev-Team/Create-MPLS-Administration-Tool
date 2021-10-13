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

    try {
        const ethnicity = await db.query(ethnicityStatement);
        const gender = await db.query(genderStatement);
        res.send({ ethnicity: ethnicity.rows, gender: gender.rows})
    } catch (error) {
        console.log('ERROR: dashboard', error);
        res.sendStatus(500);
    }
});

module.exports = router;
