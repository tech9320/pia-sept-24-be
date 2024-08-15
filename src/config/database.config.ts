import mongoose from "mongoose";

const connectDB = async () => {
    try {
        console.log("Connecting to MongoDB database...");
        await mongoose.connect("mongodb://localhost:27017/backend_db");
        console.log("Connected to MongoDB database");
    } catch (err) {
        console.error(`Connection to MongoDB database failed. ${err}`);
        process.exit(1);
    }
};

export default connectDB;
