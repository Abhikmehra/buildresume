const mongoose = require("mongoose");

const URL = 'mongodb://127.0.0.1:27017/Build-resume';

mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true });

const connection = mongoose.connection;

connection.on('connected', () => {
    console.log('Mongo DB Connection Successful');
});

connection.on('error', (error) => {
    console.log('Mongo DB Connection Error: ', error);
});