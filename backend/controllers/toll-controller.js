const { Toll } = require("../model/Toll");

exports.getAlltoll = async (req, res, next) => {
    try {
        const tolls = await Toll.find();
        return res.status(200).json({ tolls });
    } catch (err) {
        console.error(err);
        return res.status(500).json({ message: "Internal server error" });
    }
};

exports.addToll = async (req, res, next) => {
    const { car_type, amount } = req.body;
    let existingToll;

    try {
        existingToll = await Toll.findOne({ car_type });
    } catch (err) {
        console.error(err);
        return res.status(500).json({ message: "Internal server error" });
    }

    if (existingToll) {
        return res.status(400).json({ message: "Toll already exists" });
    }

    const toll = new Toll({
        car_type, 
        amount
    });

    try {
        await toll.save();
        return res.status(201).json({ toll });
    } catch (err) {
        console.error(err);
        return res.status(500).json({ message: "Internal server error" });
    }
};
