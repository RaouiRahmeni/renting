const Announcement = require('./Announcement');
const AnnouncementHistory = require('./AnnouncementHistory');
const Booking = require('./Booking');
const mongoose = require('mongoose'), Schema = mongoose.Schema;
const db = require('./index.js');
mongoose.Promise = global.Promise;

const hostSchema = new mongoose.Schema({
  username: String,
  password: String,
  phone:String,
  email: String,
  cardId: String,
  bookings : [{ type: Schema.Types.ObjectId, ref: 'Booking' }],
  announcements : [{ type: Schema.Types.ObjectId, ref: 'Announcement' }],
  history : [{ type: Schema.Types.ObjectId, ref: 'AnnouncementHistory' }]

},
  {
    timestamps: true
  }
);

const Host = mongoose.model('Host', hostSchema);
// var host1 = new Host({ username: 'hichem', password: '123',phone:'961102',email:'hichem@gmail.com',cardId:'0556432' });
//   host1.save(function (err) {
//     if (err) return handleError(err);
//     // saved!
//   }); 
module.exports = Host;