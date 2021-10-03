const express = require('express');
const db = require('../modules/pool');
const router = express.Router();
const {  rejectUnauthenticated } = require('../modules/authentication-middleware');

/**
 * GET all settings for app
 */
// Fetching multiple queries, and packaging it up to one object
router.get('/', rejectUnauthenticated, async (req, res) => {
     let config = {};

    // Gender
    try {
        const statement = `
            SELECT id, name FROM gender`;

        const result = await db.query(statement);
        config = {...config, gender: result.rows }
    } catch (error) {
        console.log('ERROR - get:/config/ gender', error);
        res.sendStatus(500);
    }

    // Grade
    try {
        const statement = `
            SELECT id, name, abbrev FROM grade`;

        const result = await db.query(statement);
        config = {...config, grade: result.rows }
    } catch (error) {
        console.log('ERROR - get:/config/ grade', error);
        res.sendStatus(500);
    }

    // Ethnicity
    try {
        const statement = `
            SELECT id, name FROM ethnicity`;

        const result = await db.query(statement);
        config = {...config, ethnicity: result.rows }
    } catch (error) {
        console.log('ERROR - get:/config/ ethnicity', error);
        res.sendStatus(500);
    }

    // Stored Settings
    try {
        const statement = `
            SELECT variable, value FROM settings`;

        const result = await db.query(statement);
        config = {...config, settings: result.rows }
    } catch (error) {
        console.log('ERROR - get:/config/ settings', error);
        res.sendStatus(500);
    }

    // Program Types
    try {
        const statement = `
            SELECT id, name FROM type`;

        const result = await db.query(statement);
        config = {...config, type: result.rows }
    } catch (error) {
        console.log('ERROR - get:/config/ type', error);
        res.sendStatus(500);
    }

    // Sending compiled payload
    // Format { grade:[], ethnicity:[], gender:[], types:[], settings:[] }
    res.send(config);
});


// 
// Send to route { settingValue: 'SuperSecretCode99' }
router.put('/setting/:settingVariable', rejectUnauthenticated, (req, res) => {

    const statement = `
        UPDATE settings 
        SET 
            value = $1,
            updated_on = NOW()
        WHERE variable = $2`;

    db.query(statement, [ req.body.settingValue, req.params.settingVariable ])
    .then( result => {
      res.sendStatus(200);
    })
    .catch(err => {
      console.log('ERROR - post:/config/registration-code', err);
      res.sendStatus(500)
    });
});

module.exports = router;