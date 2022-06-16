const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const employeeSchema = new Schema({
    Fname: {
        type: String,
        required: true,
        unique: true,
    },
    Lname: {
        type: String,
        required: true,
        match: /[a-z]/,
    },
    Email:{
        type:String,
        required: 'Email address is required',
     
        // match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address'],
     
    },
    Password:{
            type:String,
            required:true,
            match:/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])/,
            minlength:5
    },
    PhoneNumber:{
        type: Number,
        required:true,
        length:8
    },
    Gender: {
        type: String,
        enum: ["Male", "Female"],
    },
    Age: {
        type: Number,
        min: [18, "Min age is 18 years"],
        max: 75,
    },
    DateOfBirth: {
        type: Date,
     },
    //  <a href="#" onclick="window.open('MyPDF.pdf', '_blank', 'fullscreen=yes'); return false;">MyPDF</a>
  Resume:{
  // type: 'application/pdf',
    type: String,
  },
  ProfilePicture:{
    //   required:true,
      type:String,
  }

}, { timestamps: true });

// Create a model with the specific schema
const employeeModel = mongoose.model("employee", employeeSchema);
// export the created model
module.exports = employeeModel;