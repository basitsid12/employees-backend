const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
    email: {
        type: String, 
        required: true,
        unique: true
    }, 
    fullName: {
        type: String,
        required: true,
    }, 
    password: {
        type: String,
        required: true
    },
    phone: {
        type: String, required: true
    },
    address: String
})

exports.employeeModel = mongoose.model('employees', employeeSchema )
