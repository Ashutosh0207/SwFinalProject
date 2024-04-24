const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/user-routes');
const carRoutes = require('./routes/car-routes');
const tollRoutes = require('./routes/toll-routes');
const transactionRoutes = require('./routes/transaction-routes');
const platesRoutes = require('./routes/plate-routes');

// Create Express App
const app = express();
app.use(express.json())
app.use("/api/user",userRoutes)
app.use("/api/car", carRoutes)
app.use("/api/toll", tollRoutes)
app.use("/api/transaction", transactionRoutes)
app.use("/api/plates", platesRoutes)

// Connect to MongoDB
mongoose.connect('mongodb+srv://prabhudesaiashutosh02:Tanuja@cluster0.wa2imgv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('MongoDB connected');
    })
    .catch((err) => {
        console.error('Error connecting to MongoDB:', err.message);
    });

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});