const express = require('express');

const { getAllUser, signup, updateUserBalance } = require('../controllers/user-controller');

const userRoutes=express.Router();

userRoutes.get("/", getAllUser);
userRoutes.post("/signup", signup);
userRoutes.put("/update", updateUserBalance);

module.exports = userRoutes;