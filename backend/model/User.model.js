const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  gender: String,
  name: Object,
  location: Object,
  email: String,
  login: Object,
  dob: Object,
  registered: Object,
  phone: String,
  cell: String,
  id: Object,
  picture: Object,
  nat: String,
});

const User = mongoose.model('User', userSchema)

module.exports = {User}