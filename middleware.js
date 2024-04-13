const express = require('express');
const app = express();  

function isLoggedin(req, res, next) {
    if (req.user) {
        next(); 
    } 
    else {
        res.status(401).send('Unauthorized: User not logged in'); 
        res.redirect('/log');
        next();
    }
}

module.exports = {
    isLoggedin
}