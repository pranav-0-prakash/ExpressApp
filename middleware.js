const express = require('express');
const app = express();  

function isLoggedin(req, res, next) {
    console.log("Logged in....")
    next();
    return;
}

module.exports = {
    isLoggedin
}