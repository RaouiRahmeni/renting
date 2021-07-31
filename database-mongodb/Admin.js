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
// var host1 = new Admin({ username: 'root', password: 'root' });
//   host1.save(function (err) {
//     if (err) return handleError(err);
//     // saved!
//   }); 
module.exports= Admin;