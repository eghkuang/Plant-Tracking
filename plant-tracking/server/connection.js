const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/myplants');

const connection = mongoose.connection;

connection.on('error', () => {
  console.log('mongoose connection error');
});

connection.once('open', () => {
  console.log('mongoose connected successfully');
});

module.exports = connection;