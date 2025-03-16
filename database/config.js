import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const MONGO_URI = process.env.MONGODB_URI;
const connectDB = async () => {
    
    try{
       const connection = await mongoose.connect(MONGO_URI)
       console.log("Connected to MongoDB");
       
    }
    catch(error){
        console.log(`Error: ${error.message}`);
        process.exit(1);
    }
}

export default connectDB;