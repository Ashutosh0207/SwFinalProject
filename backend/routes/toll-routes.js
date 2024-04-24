const express = require('express');
const { getAlltoll, addToll } = require('../controllers/toll-controller');
const tollRoutes=express.Router();

tollRoutes.get("/", getAlltoll)
tollRoutes.post("/addToll", addToll)

module.exports = tollRoutes;