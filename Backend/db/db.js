const mongoose = require('mongoose');
const db=async()=>{
    try{
        await mongoose.connect(process.env.MONGO_URL)
        console.log('Connected to database');
    } catch(err){
        console.log('Error connecting to database: ',err);
    }
};
module.exports={db}; 