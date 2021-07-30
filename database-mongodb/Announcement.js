
const Host = require('./Host');
const Visitor = require('./Visitor');
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
    comments:String,
    views:Number,
    startDate:Date,
    endDate:Date,
    host : { type: Schema.Types.ObjectId, ref: 'Host' },
    visitor:[{ type: Schema.Types.ObjectId, ref: 'Visitor' }]
  },
    {
      timestamps: true
    }
  );
  const Announcement = mongoose.model('Announcement', announcementSchema);
//   var host1 = new Announcement({ title:"villa ", description:" with mountain view",address:"sfax",
//   numberOfVisitors:4,numberOfRooms:4,picture1:"./react-client/dist/image2.jpg",strongPoints:"comfortable, luxury, near the sea and the city center"
// ,startDate:"2021-08-12",endDate:"2021-08-30" ,host:"610034a4f4f10d2970058b92"});
//   host1.save(function (err) {
//     if (err) return handleError(err);
//     // saved!
//   }); 
module.exports = Announcement;