import mongoose from "mongoose";

mongoose.connect(
    "mongodb+srv://ukkashaali2k:76iitxARE3SmCXoN@blogcluster.bonatrj.mongodb.net/"
);

const mongoConnection = (callback: (result: string) => void) => {
    const db = mongoose.connection;
    db.on("error", console.error.bind(console, "MongoDB connection error:"));
    db.once("open", () => {
        callback("Connected to MongoDB Atlas!");
    });
};

export default mongoConnection;