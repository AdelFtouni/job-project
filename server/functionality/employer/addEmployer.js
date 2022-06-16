const mongoose = require('mongoose');

const employerModel = require("../../models/employer");

// make a connection 
mongoose.connect('mongodb+srv://adelFtouni:adelFtouni123@cluster0.pd1zrmk.mongodb.net/?retryWrites=true&w=majority');

// get reference to database
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function() {
  console.log("Connection Successful!");
  

  // a document instance
  const employer1 = new employerModel({
    Fname: 'Adib',
    Lname: 'Ftouni',
    Email: "Adib@gmail.com",
    Password:"Adib123",
    PhoneNumber:08347545,
    Gender:"Male",
   CompanyName: "bmb",    
});

  // save model to database
  employer1.save(function (err, book) {
    if (err) return console.error(err);
    console.log(JSON.stringify(employer1) + " saved to employer collection.");
  });
  
});