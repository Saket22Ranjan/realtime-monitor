const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/monitorDB");

const db = mongoose.connection;

db.on("error", err => console.error("MongoDB error:", err));
db.once("open", () => console.log("✅ MongoDB Connected"));

module.exports = mongoose;
