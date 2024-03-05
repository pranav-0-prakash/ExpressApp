const express = require('express');
const userRoutes = require('./routes/userRoutes');
const app = express();

app.use('/', userRoutes);

app.listen(3000, () => console.log('Server started on port 3000'));