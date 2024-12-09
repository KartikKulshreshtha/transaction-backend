const express = require('express')
const router = express.Router();
const transactions = require('./transactions/transactions')

router.use('/transactions', transactions)

module.exports = router;