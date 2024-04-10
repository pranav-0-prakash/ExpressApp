const mongoose = require('mongoose');


const dashboardSchema = new mongoose.Schema({
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
    time:{
        type : Date,
        required : true,
    },
},);

const Dashboard = mongoose.model('Dashboard', dashboardSchema);