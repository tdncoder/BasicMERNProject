import mongoose from "mongoose";
export const connectDB = async () => {
  try {
    const connect = await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB connected!");
  } catch (error) {
    console.error(`Error connecting ${error.message}`);
    process.exit(1);
  }
};
