const express = require('express');
const userRoutes = require('./routes/userRoutes').default;
const db = require('./connection');
const app = express();

db.connect();
app.use('/', userRoutes);

app.listen(3000, () => console.log('Server started on port 3000'));