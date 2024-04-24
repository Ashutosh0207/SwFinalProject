const XLSX = require('xlsx');
const {User} = require('../model/User');
const {Car} = require('../model/Car');

exports.getPlates = async (req, res, next) => {
    try {
        console.log('Fetching data from Excel file...');
        const workbook = XLSX.readFile('C:\\Users\\Ashutosh Prabhudesai\\Desktop\\Book1.xlsx');
        const sheet = workbook.Sheets[workbook.SheetNames[0]];
        
        console.log('Extracting number plates from Excel sheet...');
        const numberPlates = XLSX.utils.sheet_to_json(sheet, { header: 1 }).map(row => row[0]);
        console.log('Number Plates:', numberPlates);
        
        console.log('Querying database for cars with specified number plates...');
        const cars = await Car.find({ number_plate: { $in: numberPlates } }).select('user_id');
        console.log('Cars:', cars);
        
        const userIds = cars.map(car => car.user_id);
        console.log('User IDs:', userIds);
        
        console.log('Querying database for users with the extracted user IDs...');
        const users = await User.find({ user_id: { $in: userIds } });
        
        console.log('Users with cars having specified number plates:');
        console.log(users);
    } catch (err) {
        console.error('Error fetching users with cars:', err.message);
    }
}

exports.deductBalance = async(req, res, next) => {
    try {
        // Your logic here to deduct 50 from users' balances
        // Load the Excel file
        const workbook = XLSX.readFile('C:\\Users\\Ashutosh Prabhudesai\\Desktop\\Book1.xlsx');
        const sheet = workbook.Sheets[workbook.SheetNames[0]];
        
        // Extract number plates from the Excel sheet
        const numberPlates = XLSX.utils.sheet_to_json(sheet, { header: 1 }).map(row => row[0]);
        
        // Find all cars with the specified number plates
        const cars = await Car.find({ number_plate: { $in: numberPlates } }).select('user_id');
        
        // Extract user IDs from cars
        const userIds = cars.map(car => car.user_id);
        
        // Find users with the extracted user IDs
        const users = await User.find({ user_id: { $in: userIds } });
        
        // Log the users with cars having specified number plates
        console.log('Users with cars having specified number plates:');
        console.log(users);
        
        // Deduct 50 from the balance of each user
        for (const user of users) {
            user.balance -= 50;
            await user.save();
        }
        
        console.log('Balance deducted successfully.');
        res.send('Balance deduction successful.');
    } catch (err) {
        console.error('Error:', err.message);
        res.status(500).send('Error deducting balances.');
    } 
}