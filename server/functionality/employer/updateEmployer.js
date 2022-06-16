const mongoose = require('mongoose');



// make a connection 
mongoose.connect('mongodb+srv://adelFtouni:adelFtouni123@cluster0.pd1zrmk.mongodb.net/?retryWrites=true&w=majority'),{
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
};

// get reference to database
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function() {
  console.log("Connection Successful!");
  
  const employerModel = require("../../models/employer");


// Find document matching the condition(age >= 5)
// and update first document with new name='Anuj'
// This function has 4 parameters i.e. filter,
// update, options, callback
employerModel.findOneAndUpdate({Fname: 'Jaycob' },
	{Fname:"Alex"}, null, function (err, docs) {
	if (err){
		console.log(err)
	}
	else{
		console.log("Original Doc : ",docs);
	}
});






  
})
// db.flightData.update({_id:ObjectId("611aaa554a0269583c8d81b1")},{$set:{"delayed":false}})





// User model
