const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const employerSchema = new Schema({
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
   CompanyName:{
    type: String,
    required:true,
   }

}, { timestamps: true });

// Create a model with the specific schema
const employerModel = mongoose.model("employer", employerSchema);
// export the created model
module.exports = employerModel;