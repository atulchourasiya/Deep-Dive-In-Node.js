const mongoose = require('mongoose')
const User = mongoose.model('User');

module.exports = ()=>{
   return new User({}).save();
}
//This file will run in other environment 