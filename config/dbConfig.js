const mongoose = require('mongoose');

require('dotenv').config();

mongoose.connect(process.env.MONGO_URL);

const db = mongoose.connection;

db.on('connected', () => {
    console.log('Mongo DB connection successful!');
})

db.on('error', (err) => {
    console.log('Mongo DB connection failed!');
})

module.exports = db;