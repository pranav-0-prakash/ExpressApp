const express = require('express');
const userRoutes = require('./routes/userRoutes');
const db = require('./connection');
const app = express();

app.use(express.urlencoded({ extended: true }));
db.connect();
app.use('/', userRoutes);

app.listen(3000, () => console.log('Server started on port 3000'));