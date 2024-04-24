const XLSX = require('xlsx');
const { Transaction } = require("../model/Transaction");

exports.getAlltransaction = async (req, res, next) => {
    try {
        const trans = await Transaction.find();
        return res.status(200).json({ trans });
    } catch (err) {
        console.error(err);
        return res.status(500).json({ message: "Internal server error" });
    }
};

exports.addTransaction = async (req, res, next) => {
    try {
        // Load the Excel file
        const workbook = XLSX.readFile('C:\\Users\\Ashutosh Prabhudesai\\Desktop\\Book1.xlsx');
        const sheet = workbook.Sheets[workbook.SheetNames[0]];
        
        // Convert sheet data to JSON
        const transactions = XLSX.utils.sheet_to_json(sheet);
        
        // Insert transactions into MongoDB
        await Transaction.insertMany(transactions);
        
        console.log('Transactions stored successfully.');
    } catch (err) {
        console.error('Error storing transactions:', err.message);
    } 
};
