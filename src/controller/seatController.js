const Seat = require('../models/Seat');

const createSeat = async (req, res) => {
  try {
    const { seatNumber } = req.body;

    // Check if seatNumber is within valid range
    if (seatNumber < 1 || seatNumber > 80) {
      return res.status(400).send({ message: 'Seat number is not valid' });
    }

    // Check if seat already exists
    const existingSeat = await Seat.findOne({ seatNumber });
    if (existingSeat) {
      return res.status(409).send({ message: 'Seat already exists' });
    }

    // Create new seat
    const seat = seat.create(req.body)

    return res.status(201).send({ message: 'Seat created successfully' },{data:seat});
  } catch (error) {
    console.log(error);
    return res.status(500).send({ message: 'Internal server error' });
  }
};

module.exports = { createSeat };
