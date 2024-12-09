const express = require('express');
const router = express.Router();
const connection = require('../../db/dbConfig');


router.post("/", async (req, res) => {
    try {
        const { type, description, amount } = req.body;
        const sqlQuery1 = "Select * from transaction";
        connection.query(sqlQuery1, (err, result) => {
            if (err) {
                return res.status(500).json({ success: false, message: "Error while inserting transaction" })
            }
            else {
                if (result.length > 0) {
                    const resultLength = result.length
                    const currentData = result[resultLength - 1]
                    let amountToAdd;
                    if (type == 'credit') {
                        amountToAdd = (Number(amount) + Number(currentData.remaining));
                    }
                    else {
                        amountToAdd = (Number(currentData.remaining) - Number(amount));
                    }
                    const sqlQuery = `INSERT INTO transaction (type, description, amount, remaining) VALUES (?, ?, ?, ?)`;
                    connection.query(sqlQuery, [type, description, amount, amountToAdd], (err, result) => {
                        if (err) {
                            console.log(err)
                            return res.status(500).json({ success: false, message: "Error while inserting transaction" })
                        }
                        else {
                            return res.status(200).json({ success: true, message: "Transaction inserted successfully" })
                        }
                    })
                }
                else {
                    const sqlQuery = `INSERT INTO transaction (type, description, amount, remaining) VALUES (?, ?, ?, ?)`;
                    connection.query(sqlQuery, [type, description, amount, amount], (err, result) => {
                        if (err) {
                            console.log(err)
                            return res.status(500).json({ success: false, message: "Error while inserting transaction" })
                        }
                        else {
                            return res.status(200).json({ success: true, message: "Transaction inserted successfully" })
                        }
                    })
                }
            }
        })

    } catch (error) {
        return res.status(500).json({ success: false, message: "Internal Server Error" })
    }
})

module.exports = router;
