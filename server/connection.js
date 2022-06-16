const mongoose=require('mongoose');


//Connect to mongodb
mongoose.connect('mongodb+srv://adelFtouni:adelFtouni123@cluster0.pd1zrmk.mongodb.net/?retryWrites=true&w=majority');


mongoose.connection.once('open',function(){
    console.log('Connection has been made, now make fireworks...');

}).on('error',function(error){
   console.log('Connection error:',error); 
});