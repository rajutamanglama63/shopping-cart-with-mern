const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const databaseConnection = async (req, res) => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser:true,
            useUnifiedTopology:true,
            useFindAndModify:true
        });
        console.log("MongoDB connection established...");
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}

module.exports = databaseConnection;