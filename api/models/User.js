const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const User = new Schema({
  id: {
    type: Number,
    unique: true
  },
  user_name: {
    type: String
  },
  password: {
    type: String
  }
},
  { collection: 'user' });

module.exports = mongoose.model('User', User);
