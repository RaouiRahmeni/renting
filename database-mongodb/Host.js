const Announcement = require('./Announcement.js');
const mongoose = require('mongoose'), Schema = mongoose.Schema;
const db = require('./index.js');
mongoose.Promise = global.Promise;

const hostSchema = new mongoose.Schema({
  username: String,
  password: String,
  phone:Number,
  email: String,
  cardId: String,
  announcements : [{ type: Schema.Types.ObjectId, ref: 'Announcement' }]

},
  {
    timestamps: true
  }
);

const Host = mongoose.model('Host', hostSchema);
module.exports.Host = Host;