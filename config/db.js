// config/db.js
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const connectDb= async()=>{
    try {
        await mongoose.connect(process.env.MONGODB_URI,{
            useNewUrlParser: true,
            useUnifiedTopology: true

        })
        console.log('MongoDB connected');
        
    } catch (error) {
        console.error(err.message);
        process.exit(1);
    }
}
module.exports=connectDb