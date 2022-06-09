const mongoose = require('mongoose');
const { CONNECTION_STRING }= require('../constants.js');

exports.initDatabase = function() {
    return mongoose.connect(CONNECTION_STRING);
}