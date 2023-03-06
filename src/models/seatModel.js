const mongoose = require('mongoose')

const seatSchema = new mongoose.Schema({
    seatNumber: { type: Number, required: true, unique: true },
    rowNumber: { type: Number, required: true },
    seatStatus: { type: String, enum: ['available', 'booked'], default: 'available' }
  });
  
  module.exports = mongoose.model('Seat', seatSchema);