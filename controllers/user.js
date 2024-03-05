function userLogin(req,res) {    
    res.send('Login page');
}
function createUser(req,res) {
    res.send('Signup page');
}
function userDashboard(req,res) {    
    res.send('Dashboard page');
}
function userAppointments(req,res) {
    res.send('Appointment page');
}
function userLogout(req,res) {
    res.redirect('/');
}
module.exports = {
    userLogin,
    createUser,
    userDashboard,
    userAppointments,
    userLogout
}