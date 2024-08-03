const mongoose = require("mongoose");
const uri = "mongodb+srv://Dhyey:abcxyz@cluster0.aexrv5l.mongodb.net/?retryWrites=true&w=majority";
const connectDB = async () => {
    try {
        const conn = await mongoose.connect(uri, {
        });
        console.log(`Mongo connected ${conn.connection.host}`)
    } catch (error) {
        console.log(`Error ${error.message}`)
        process.exit(1);
    }
};

module.exports = connectDB;

