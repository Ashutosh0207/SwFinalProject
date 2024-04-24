const { User } = require("../model/User");

exports.getAllUser = async (req, res, next) => {
    try {
        const users = await User.find();
        if (!users || users.length === 0) {
            return res.status(404).json({ message: "No users found" });
        }
        return res.status(200).json({ users });
    } catch (err) {
        console.error(err);
        return res.status(500).json({ message: "Internal server error" });
    }
};

exports.signup = async (req, res, next) => {
    const {user_id, name, address, phone, balance} = req.body;
    let existingUser;

    try{
        existingUser = await User.findOne({user_id});
    }catch(err){
        return console.log(err)
    }

    if(existingUser){
        return res.status(400).json({message: "User already exists"});
    }

    const user = new User({
        user_id,
        name,
        address,
        phone,
        balance
    });

    try{
        await user.save();
    } catch(err){
        console.log(err);
    }

    return res.status(201).json({user});
};

exports.updateUserBalance = async(req, res, next) => {
    const {user_id} = req.body;
    const deductionAmount = 50;
    try {
        // Find the user by user_id
        const user = await User.findOne({ user_id: user_id });

        if (!user) {
            console.log(`User with user_id ${user_id} not found.`);
            return;
        }

        // Deduct the specified amount from the user's balance
        if (user.balance >= deductionAmount) {
            user.balance -= deductionAmount;
            await user.save();
            console.log(`Balance updated for user ${user.name}. New balance: ${user.balance}`);
            return res.status(201).json({user});
        } else {
            console.log(`Insufficient balance for user ${user.name}. Balance: ${user.balance}`);
            return res.json({"message": `Insufficient balance for user ${user.name}. Balance: ${user.balance}`});
        }

    } catch (err) {
        console.error('Error updating balance:', err.message);
        return res.json({"message": 'Error updating balance'});
    }
}