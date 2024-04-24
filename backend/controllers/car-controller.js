const { Car } = require("../model/Car");

exports.getAllCars = async (req, res, next) => {
    try {
        const cars = await Car.find();
        return res.status(200).json({ cars });
    } catch (err) {
        console.error(err);
        return res.status(500).json({ message: "Internal server error" });
    }
};

exports.addCar = async (req, res, next) => {
    const { number_plate, car_type, user_id } = req.body;

    if (!user_id) {
        return res.status(400).json({ message: "user_id is required" });
    }

    let existingCar;

    try {
        existingCar = await Car.findOne({ number_plate });
    } catch (err) {
        console.error(err);
        return res.status(500).json({ message: "Internal server error" });
    }

    if (existingCar) {
        return res.status(400).json({ message: "Car already exists" });
    }

    const car = new Car({
        number_plate,
        car_type,
        user_id // Make sure user_id is provided
    });

    try {
        await car.save();
        return res.status(201).json({ car });
    } catch (err) {
        console.error(err);
        return res.status(500).json({ message: "Internal server error" });
    }
};