const Booking = require('./Booking.js');
const mongoose = require('mongoose'), Schema = mongoose.Schema;
const db = require('./index.js');
mongoose.Promise = global.Promise;


const visitorSchema = new mongoose.Schema({
  username: String,
  password: String,
  cardId:String,
  phone:Number,
  email: String,
  bookings: [{ type: Schema.Types.ObjectId, ref: 'Booking' }]
},
  {
    timestamps: true
  }
);
const Visitor = mongoose.model('Visitor', visitorSchema);
module.exports.Visitor = Visitor;