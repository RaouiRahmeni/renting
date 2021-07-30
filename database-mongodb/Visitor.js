const Booking = require('./Booking');
const BookingHistory = require('./BookingHistory');
const mongoose = require('mongoose'), Schema = mongoose.Schema;
const db = require('./index.js');
mongoose.Promise = global.Promise;


const visitorSchema = new mongoose.Schema({
  username: String,
  password: String,
  cardId:String,
  phone:String,
  email: String,
  Favoris:[{ type: Schema.Types.ObjectId, ref: 'Announcement' }],
  bookings: [{ type: Schema.Types.ObjectId, ref: 'Booking' }],
  history: [{ type: Schema.Types.ObjectId, ref: 'BookingHistory' }]
},
  {
    timestamps: true
  }
);
const Visitor = mongoose.model('Visitor', visitorSchema);
module.exports = Visitor;