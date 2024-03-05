const mongoose = require('mongoose');

function connect() {
    mongoose.connect('mongodb://localhost:27017/Hospital_Management', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("Connected to database");
    })
    .catch((err) => {
        console.log("Error connecting to database", err);
    });
}

module.exports = {
    connect
}