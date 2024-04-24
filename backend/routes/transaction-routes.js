const express = require('express');
const { getAlltransaction, addTransaction } = require('../controllers/transaction-controller');
const transactionRoutes=express.Router();

transactionRoutes.get("/", getAlltransaction)
transactionRoutes.post("/addTrans", addTransaction)

module.exports = transactionRoutes;