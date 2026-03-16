require('dotenv').config();
const express = require('express');
const app = express();
const morgan = require('morgan');
const cors = require('cors');
const connectDB = require('./config/db');

connectDB();

app.use(morgan('dev'));
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Welcome to the API');
});

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port:http://localhost:${process.env.PORT}`);
});
