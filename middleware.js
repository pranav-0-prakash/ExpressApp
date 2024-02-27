const express = require('express');
const app = express();  

function isLogin(req, res, next) {
    console.log("Logged in....")
    next();
}

module.exports = {
    isLogin
}