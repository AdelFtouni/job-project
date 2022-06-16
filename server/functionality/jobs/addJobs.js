const mongoose = require('mongoose');

const JobModel = require("../../models/jobs");

// make a connection 
mongoose.connect('mongodb+srv://adelFtouni:adelFtouni123@cluster0.pd1zrmk.mongodb.net/?retryWrites=true&w=majority');

// get reference to database
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function() {
  console.log("Connection Successful!");
  

  // a document instance
  const job1 = new JobModel({
    JobTitle: 'senior developer',
    JobDescription: 'coding',
    AboutCompany: "job portal",
    JobCategory:"developer",
    JobType:"web development",
    SalaryFrom:"1000$",
    SalaryTo: "1500$",
    SalaryMonthFix: "1400$" , 
    Language: "english" ,
    DeadlineSubmission: "august-11",
    JobLocation:"beirut"

});

  // save model to database
  job1.save(function (err, book) {
    if (err) return console.error(err);
    console.log(JSON.stringify(job1) + " saved to jobs collection.");
  });
  
});

