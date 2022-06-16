const mongoose = require('mongoose');

const JobModel = require("../../models/jobs");
run().catch(error => console.log(error.stack));


async function run() {
    const url = 'mongodb+srv://adelFtouni:adelFtouni123@cluster0.pd1zrmk.mongodb.net/?retryWrites=true&w=majority';

  await mongoose.connect(url, { useNewUrlParser: true });

  const Job = await JobModel.find();
  console.log(Job);
}

// To retrieve a specific employee


// const mongoose = require('mongoose');

// const employeeModel = require("../models/employee");
// run().catch(error => console.log(error.stack));


// async function run() {
//     const url = 'mongodb+srv://adelFtouni:adelFtouni123@cluster0.pd1zrmk.mongodb.net/?retryWrites=true&w=majority';

//   await mongoose.connect(url, { useNewUrlParser: true });

//   const employee = await employeeModel.findOne({Fname:'Sana'});
//   console.log(employee);
// }

