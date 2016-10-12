const mongoose = require('mongoose');

const Crud = mongoose.model('Crud', {
  name: String,
});

module.exports = Crud;
