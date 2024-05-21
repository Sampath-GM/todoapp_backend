const mongoose = require('mongoose');

const database_connection = async () =>{
    try{
        await mongoose.connect('');
        console.log("database is connected");   
    }
    catch(error){
        console.log(error);
    }
    }

module.exports = database_connection;
    
    
    


