
const user = require('../models/userModel');

const registerUser = async (req, res) => {
  
    const data= req.body;




// Controller function to get the seat map
// const getSeatMap = async (req, res) => {
//   try {
//     // Find the first user who has not booked any seats yet
//     const user = await User.findOne({ bookedSeats: [] });

//     // If no such user is found, return an error
//     if (!user) {
//       return res.status(400).send({ error: 'No available users to book seats' });
//     }

  

/////
    const { numSeats } = data
  
    // Check if the number of seats is valid
    if (numSeats <= 0 || numSeats > 7) {
      return res.status(400).send({ error: 'Invalid number of seats' });
    }
  
    
      // Find a user who has not booked any seats yet
      const user = await user.findOne({ bookedSeats: [] });
  
      // If no such user is found, return an error
      if (!user) {
        return res.status(400).send({ error: 'No available users to book seats' });
      }
  
      // Check if the required number of seats is available in one row
      let startIndex = -1;
      let count = 0;
      for (let i = 0; i < user.seatMap.length; i++) {
        if (user.seatMap[i] === 0) {
          count++;
          if (count === numSeats) {
            startIndex = i - numSeats + 1;
            break;
          }
        } else {
          count = 0;
        }
      }
  
      // If the required number of seats is not available in one row,
      // find the closest available seats
      if (startIndex === -1) {
        for (let i = 0; i < user.seatMap.length; i++) {
          if (user.seatMap[i] === 0) {
            count++;
            if (count === numSeats) {
              startIndex = i - numSeats + 1;
              break;
            }
          } else {
            count = 0;
          }
        }
      }
  
      // If the required number of seats is not available, return an error
      if (startIndex === -1) {
        return res.status(400).send({ error: 'Seats not available' });
      }
  
      // Mark the seats as booked in the user's seatMap
      for (let i = startIndex; i < startIndex + numSeats; i++) {
        user.seatMap[i] = 1;
      }
  
      // Update the user's bookedSeats array with the seat numbers
      const bookedSeats = [];
      for (let i = startIndex; i < startIndex + numSeats; i++) {
        bookedSeats.push(i + 1);
      }
      user.bookedSeats = user.bookedSeats.concat(bookedSeats);
  
  
    let createUser = await user.create(data);
    return res.status(201).send({ status: true, msg: "User created Successfully", data: createUser,bookedSeats });


    
  };
  
  




 
module.exports = { registerUser};

  