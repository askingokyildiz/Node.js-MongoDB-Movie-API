const mongoose = require('mongoose');

module.exports=()=>{
    mongoose.connect('mongodb+srv://cyberrock:Test.123123123@cyberrock-1qzvt.mongodb.net/test?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true});
    mongoose.connection.on('error',()=>{
        console.log('MongoDB: Error!');
    });
    mongoose.connection.on('open',()=>{
        console.log('MongoDB: Connected');
    });
    mongoose.Promise=global.Promise;
};