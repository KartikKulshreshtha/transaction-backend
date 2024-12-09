const express = require('express');
const router = express.Router();
const connection = require('../../db/dbConfig');


router.get("/", async (req, res) => {
    try {
        const sqlQuery = `select * from transaction`;
        connection.query(sqlQuery, (err, result) => {
            if (err) {
                return res.status(500).json({ success: false, message: "Error executing query" })
            }
            else{
                return res.status(200).json({success: true, data: result});
            }
        })
    } catch (error) {
        return res.status(500).json({ success: false, message: "Internal Server Error" })
    }
})

module.exports = router;
