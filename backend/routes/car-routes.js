const express = require('express');
const { getAllCars, addCar } = require('../controllers/car-controller');
const carRoutes=express.Router();

carRoutes.get("/", getAllCars)
carRoutes.post("/addCar", addCar)

module.exports = carRoutes;