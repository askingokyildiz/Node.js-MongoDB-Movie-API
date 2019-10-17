const mongoose = require('mongoose');

module.exports=()=>{
    mongoose.connect('mongodb+srv://cyberrock:Test.123123123@cyberrock-1qzvt.mongodb.net/test?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true});
   
};