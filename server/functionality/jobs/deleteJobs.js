const mongoose = require('mongoose');


// make a connection 
mongoose.connect('mongodb+srv://adelFtouni:adelFtouni123@cluster0.pd1zrmk.mongodb.net/?retryWrites=true&w=majority');

// get reference to database
const db = mongoose.connection;

async function run() {
//   const entry = await Test.create({ name: 'Masteringjs.io' });
//   console.log(await Test.countDocuments({ _id: entry._id })); // 1
const JobModel = require("../../models/Jobs");
  // Delete the document by its _id
  await JobModel.deleteOne({ JobTitle: 'junior developer' });

  console.log(await JobModel.countDocuments({ JobTitle: 'junior developer' })); // 0
}

run();