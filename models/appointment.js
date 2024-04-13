const mongoose = require('mongoose');
const controllers = require('../controllers/userFunctions');

const appointmentSchema = new mongoose.Schema({
    date:{
        type : Date,
        required : true,
    },
    time:{
        type : Date,
        required : true,
    },
    name:{
        type : String,
        required : true,
    },
    appointment:{
        type : Boolean,
        required : true,
    },
    advice:{
        type : String,
        required : true,
    },
    prescription:{
        type : String,
    },
},
    {timestamps: true},
);

const User = model('Appointment', appointmentSchema);
module.exports = Appointment;
