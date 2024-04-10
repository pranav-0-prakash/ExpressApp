import { model } from 'mongoose';


const appointmentSchema = new mongoose.Schema({
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
    },
    date:{
        type : Date,
        required : true,
    },
    time:{
        type : Date,
        required : true,
    },
    appointment:{
        type : Boolean,
        required : true,
    },
},
    {timestamps: true},
);

const User = model('Appointment', appointmentSchema);
