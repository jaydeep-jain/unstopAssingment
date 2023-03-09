

const user = require('../models/userModel');

let totalSeats = 80
let totalRows = 12
let x =0

const registerUser = async (req, res) => {

const data= req.body;
let { bookedSeats} = data

if (bookedSeats <= 0 || bookedSeats > 7) {
  return res.status(400).send({ error: 'Invalid number of seats seat should be below  8' });
}

if ((totalSeats<bookedSeats)){
  return res.status(400).send({message:"there is no availability of your required seats here is only "+totalSeats+" seats left "})
}
console.log(totalSeats)


let arr = []



   totalSeats -= bookedSeats

for(let i =1;i<=bookedSeats;i++){
  arr.push(" yes your booking is confirmed and your "+i+" seat NO.is =>"+(i+x))

}

x += bookedSeats

console.log(x)


 // console.log(arr)


  
    let createUser = await user.create(data);
    
    let seatConfirmationChart = arr
    
    return res.status(201).send({ status: true, data: createUser,seatConfirmationChart, });
}



const getUsersBookingDetails = async function(req,res){

  

  let finallyGetDetails = await user.find()
 
return res.status(200).send({ status: true, message: "Success", data: finallyGetDetails ,totalRemainingSeat:totalSeats})
  

    
}

const getOneUserBookingDetails = async function(req,res){

  let data = req.body

  const {_id} = data

  let details = await user.findById({_id:_id})
  console.log(details)
 
return res.status(200).send({ status: true, message: "Success", data: details ,totalRemainingSeat:totalSeats})
}


module.exports = { registerUser,getUsersBookingDetails,getOneUserBookingDetails};

 