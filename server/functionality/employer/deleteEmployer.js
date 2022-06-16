const mongoose = require('mongoose');


// make a connection 
mongoose.connect('mongodb+srv://adelFtouni:adelFtouni123@cluster0.pd1zrmk.mongodb.net/?retryWrites=true&w=majority');

// get reference to database
const db = mongoose.connection;

async function run() {

const employerModel = require("../../models/employer");

  await employerModel.deleteOne({ Fname: 'Alex' });

  console.log(await employerModel.countDocuments({ Fname: 'Alex' })); // 0
}

run();