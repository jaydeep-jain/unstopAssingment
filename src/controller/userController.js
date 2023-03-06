
const user = require('../models/userModel');

let totalSeats = 80


const registerUser = async (req, res) => {

const data= req.body;
let arr = []
let x =0
    const { bookedSeats} = data

    totalSeats -= bookedSeats

for(let i =1;i<=bookedSeats;i++){
  arr.push(1+x)

}
x += bookedSeats
  

  
    // Check if the number of seats is valid
    if (bookedSeats <= 0 || bookedSeats > 7) {
      return res.status(400).send({ error: 'Invalid number of seats' });
    }
    let ok =
  data.ok =[arr]
    let createUser = await user.create(data);
    
    return res.status(201).send({ status: true, msg: "User created Successfully", data: createUser });

};
  
const getUserBookingDetails = async function(req,res){

    

}




module.exports = { registerUser,getUserBookingDetails};

 