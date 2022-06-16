const mongoose = require('mongoose');

const employeeModel = require("../models/employee");

// make a connection 
mongoose.connect('mongodb+srv://adelFtouni:adelFtouni123@cluster0.pd1zrmk.mongodb.net/?retryWrites=true&w=majority');

// get reference to database
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function() {
  console.log("Connection Successful!");
  

  // a document instance
  const employee1 = new employeeModel({
    Fname: 'Sana',
    Lname: 'Onaissy',
    Email: "SANA@gmail.com",
    Password:"Sana123",
    PhoneNumber:03343545,
    Gender:"Female",
    Age: 21,    
});

  // save model to database
  employee1.save(function (err, book) {
    if (err) return console.error(err);
    console.log(JSON.stringify(employee1) + " saved to employee collection.");
  });
  
});

