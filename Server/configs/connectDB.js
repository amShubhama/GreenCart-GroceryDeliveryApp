import mongoose from "mongoose";

const MONGODB_URL = process.env.MONGODB_URL;
async function connectDB() {
    try {
        await mongoose.connect(`${MONGODB_URL}/GreenCart`).then(() => {
            console.log("DB is connected successfully...");
        });
    } catch (error) {
        console.error(error.message);
    }
}

export default connectDB;