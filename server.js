require('dotenv').config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

// Middleware
app.use(cors());
app.use(express.json()); // JSON data handle karne ke liye

// Database Connection
const mongoURI = process.env.MONGO_URI || "mongodb+srv://sanikajejurkar292:k2LJhE7L9nw1HEHm@cluster0.4enta.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log("MongoDB Connected"))
  .catch(err => console.error("MongoDB Connection Failed:", err));

// Basic Route
app.get("/", (req, res) => {
    res.send("Backend is running!");
});

// Server Listen
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));