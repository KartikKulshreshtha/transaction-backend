const express = require('express')
const router = express.Router();
const addTransaction = require('./addTransactions');
const getAllTransaction = require('./getAllTransactions')

router.use('/addTransaction', addTransaction)
router.use('/getAllTrasaction', getAllTransaction);


module.exports = router;
