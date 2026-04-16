const mongoose = require('mongoose');

async function connectDB() {
    await mongoose.connect('mongodb+srv://yt:HUwgxSQG6aFqWB72@yt-complete-backend.j4p7phm.mongodb.net/project-1')

    console.log("Database connected!");
}

module.exports = connectDB;