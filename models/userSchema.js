const mongoose = require('mongoose');


const userSchema = new Schema({
    firstName:{
        type : String,
        required : true,
    },
    lastName:{
        type : String,
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