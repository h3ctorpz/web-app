const express = require('express');
const app = express();
const router = express.Router();

const userRoutes = require('./routes/user');

app.use('/user', userRoutes);

app.get('/', (req, res) => {
    res.send('Welcome Home');
});

module.exports=app;