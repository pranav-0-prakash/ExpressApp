const express = require('express'); 
const app = express();

app.get('/login', (req, res) => {
    if(db.authenticate(req.body.username, req.body.password)) {
        res.send('You are logged in');
    } else {
        res.send('Invalid username or password');
    }
});

app.post('/signup', (req, res) => {	
    if(db.createUser(req.body.username, req.body.password)) {
        res.send('User created');
    } else {
        res.send('User already exists');
    }
});

app.listen(3000, () => console.log('Server started on port 3000'));