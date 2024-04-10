const express = require('express');
const router = express.Router();
const { userLogin, createUser, userDashboard, userAppointments, userLogout, home } = require('../controllers/userFunctions');
const { isLoggedin } = require('../middleware');

const app = express();
router.get('/',home);
router.get('/log', userLogin);
router.use(express.json());
router.post('/log', createUser);
router
    .get('/dashboard', isLoggedin, userDashboard);
    // .post('/dashboard', createDashboard);
router
    .get('/appointment', isLoggedin, userAppointments);
    // .post('/appointment', createAppointments);
router.get('/logout', userLogout);

module.exports = router;