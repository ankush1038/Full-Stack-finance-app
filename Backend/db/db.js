const mongoose = require('mongoose');
const db=async()=>{
    try{
        mongoose.set('strictQuery', false);
        await mongoose.connect(process.env.MONGO_URL)
        console.log('Connected to database');
    } catch(err){
        console.log('Error connecting to database: ',err);
    }
};
module.exports={db}; 