const Visitor = require('./Visitor.js');
const mongoose = require('mongoose'), Schema = mongoose.Schema;
const db = require('./index.js');
mongoose.Promise = global.Promise;

const bookingSchema = new mongoose.Schema({
    startDate:Date,
    endDate:Date,
    visitor : { type: Schema.Types.ObjectId, ref: 'Visitor' }
    },
      {
        timestamps: true
      }
    );

    const Booking = mongoose.model('Booking', bookingSchema);

    module.exports.Booking = Booking;