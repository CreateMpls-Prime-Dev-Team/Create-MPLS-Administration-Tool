const express = require('express');
const db = require('../modules/pool');
const router = express.Router();
const {  rejectUnauthenticated } = require('../modules/authentication-middleware');
const { default: axios } = require('axios');

router.get('', rejectUnauthenticated, async (req,res) => {
    const ethnicityStatement = `
        
        `;

    try {
        const ethnicity = await db.query(ethnicityStatement);
    } catch (error) {
        console.log('ERROR: dashboard', error);
        res.sendStatus(500);
    }
});

module.exports = router;
