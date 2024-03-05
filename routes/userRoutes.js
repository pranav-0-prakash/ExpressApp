const express = require('express');
const router = express.Router();
const { userLogin, createUser, userDashboard, userAppointments, userLogout, home } = require('../controllers/userFunctions');
const { isLoggedin } = require('../middleware');

router.get('/',home);
router.get('/login', userLogin);
router.post('/signup', createUser);
router
    .get('/dashboard', isLoggedin, userDashboard);
    // .post('/dashboard', createDashboard);
router
    .get('/appointment', isLoggedin, userAppointments);
    // .post('/appointment', createAppointments);
router.get('/logout', userLogout);

module.exports = router;