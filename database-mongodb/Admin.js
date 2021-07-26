const mongoose = require('mongoose'), Schema = mongoose.Schema;
const db = require('./index.js');
mongoose.Promise = global.Promise;



const adminSchema = new mongoose.Schema({
  username: String,
  password: String,
},
  {
    timestamps: true
  }
);


const Admin = mongoose.model('Admin', adminSchema);

module.exports.Admin = Admin;