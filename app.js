const express = require('express'); 
const method = require('./method');
const middleware = require('./middleware');
const app = express();

app.get('/login', method.userLogin);

app.get('/',(req, res) => {
    res.send('Home page');  
});

app.post('/signup', method.createUser);

//Middleware
app.get('/dashboard', middleware.isLoggedin, method.userDashboard);
app.get('/appointment', middleware.isLoggedin, method.userAppointments);
app.get('/logout', middleware.isLoggedin, method.userLogout);

app.listen(3000, () => console.log('Server started on port 3000'));