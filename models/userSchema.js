const mongoose = require('mongoose');
const controllers = require('../controllers/userFunctions');


const userSchema = new mongoose.Schema({
    name:{
        type : String,
        required : true,
    },
    email:{
        type : String,
        required : true,
        unique : true,
    },
    mobile:{
        type : Number,
        required : true,
        unique : true,
    },
    password:{
        type : String,
        required : true,
    },
    role:{
        type : String,
        required : true,
    },
},);

const User = mongoose.model('User', userSchema);
module.exports = User;