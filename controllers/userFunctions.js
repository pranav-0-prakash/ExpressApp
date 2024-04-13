const User = require('../models/userSchema');
const bcrypt = require('bcrypt');
const saltRounds = 10;

async function userLogin(req,res) {    
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
        return res.status(400).send('No user with that email');
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
        return res.status(400).send('Invalid password');
    }

    res.send('Logged in!');
}

async function createUser(req, res) {
    try {
        const hashedPassword = await bcrypt.hash(req.body.password, saltRounds);

        const user = new User({
            name: req.body.name,
            email: req.body.email,
            mobile: req.body.mobile,
            password: hashedPassword,
            role: "Patient"
        });

        const savedUser = await user.save();

        console.log('User created!');
        res.status(200).send('User created!');
    } 
    catch (err) {
        console.log(err);
        res.status(500).send('Error creating user');
    }
}

function userDashboard(req,res) {    
    res.send('Dashboard page');
}

function userAppointments(req,res) {
    res.send('Appointment page');
}

function userLogout(req,res,next) {
    res.redirect('/');
    next();
}

function home(req,res) {
    console.log('Home page');
    res.end();
}

module.exports = {
    userLogin,
    createUser,
    userDashboard,
    userAppointments,
    userLogout,
    home
}