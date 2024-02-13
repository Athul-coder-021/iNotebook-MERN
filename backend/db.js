const mongoose = require('mongoose');

const mongoURI = "mongodb+srv://ak021coder:10693Athul@cluster0.fpmojg6.mongodb.net/";

const connectToMongo = async () => {
    try {
        await mongoose.connect(mongoURI);
        console.log("Connected to MongoDB successfully");
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
    }
};

module.exports = connectToMongo;
