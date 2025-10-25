import mongoose from 'mongoose'

export const connectDB = async () =>{
    try {
        const conn = await mongoose.connect(process.env.MONGO_URL, {
            serverSelectionTimeoutMS: 30000,
            socketTimeoutMS: 45000,
            connectTimeoutMS: 30000,
            maxPoolSize: 10,
            retryWrites: true,
            retryReads: true
        });
        console.log(`MongoDB Connected: ${conn.connection.host}`);

    } catch (error) {
        console.log(`Error in Mongodb ${error}`);
        process.exit(1);//process code 1 means failuer and 0 means success
    }
}