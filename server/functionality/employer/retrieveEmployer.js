
const mongoose = require('mongoose');

const employerModel = require("../../models/employer");
run().catch(error => console.log(error.stack));


async function run() {
    const url = 'mongodb+srv://adelFtouni:adelFtouni123@cluster0.pd1zrmk.mongodb.net/?retryWrites=true&w=majority';

  await mongoose.connect(url, { useNewUrlParser: true });

  const employer = await employerModel.find();
  console.log(employer);
}



