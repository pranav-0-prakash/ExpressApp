// userRoutes.js
const express = require('express');
const router = express.Router();
const { userLogin, createUser, userDashboard, userAppointments, userLogout } = require('./controllers/user');

router.get('/login', userLogin);
router.post('/signup', createUser);
router.get('/dashboard', userDashboard);
router.get('/appointment', userAppointments);
router.get('/logout', userLogout);

module.exports = router;