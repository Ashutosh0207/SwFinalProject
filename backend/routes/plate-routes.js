const express = require('express');
const { getPlates, deductBalance } = require('../controllers/plate-controller');
const platesRoutes=express.Router();

platesRoutes.get("/", getPlates)
platesRoutes.put('/deduct', deductBalance);

module.exports = platesRoutes;