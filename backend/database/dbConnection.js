import mongoose from "mongoose";

export const dbConnection = () => {
  mongoose.connect(process.env.MONGO_URI, {
      dbName: "Hospital_Management_Project",
    })
    .then(() => {
      console.log("Connected to database!");
    })
    .catch(err => {
      console.error('Error connecting to MongoDB:', err);
    });
};
