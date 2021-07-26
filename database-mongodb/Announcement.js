
const Host = require('./Host.js');
const mongoose = require('mongoose'), Schema = mongoose.Schema;
const db = require('./index.js');
mongoose.Promise = global.Promise;

const announcementSchema = new mongoose.Schema({
    title: String,
    description: String,
    address:String,
    numberOfRooms:Number,
    numberOfVisitors: Number,
    picture1:String,
    picture2:String,
    picture3:String,
    picture3:String,
    picture4:String,
    picture5:String,
    strongPoints:String,
    extraAccomodations:String,
    startDate:Date,
    endDate:Date,
    host : { type: Schema.Types.ObjectId, ref: 'Host' }
  },
    {
      timestamps: true
    }
  );
  const Announcement = mongoose.model('Announcement', announcementSchema);
  
module.exports.Announcement = Announcement;