const express = require("express");
const { MongoClient, ServerApiVersion } = require("mongodb");
const Message = require("./models/Message");
const app = express();
const PORT = 3000;

// MongoDB Atlas URI
const uri = "mongodb://raoraghav28_db_user:Chatapp123@ac-c26nqnl-shard-00-00.wbekswv.mongodb.net:27017,ac-c26nqnl-shard-00-01.wbekswv.mongodb.net:27017,ac-c26nqnl-shard-00-02.wbekswv.mongodb.net:27017/?ssl=true&replicaSet=atlas-70bdex-shard-0&authSource=admin&appName=Cluster0";

// Create Mongo client
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

// Connect to MongoDB
async function connectDB() {
    try {
        await client.connect();
        await client.db("admin").command({ ping: 1 });
        console.log("Pinged your deployment. Successfully connected to MongoDB!");
    } catch (error) {
        console.error("MongoDB connection error:", error);
    }
}

// Call connection
connectDB();

// Basic route
app.get("/", (req, res) => {
    res.send("Welcome to the Chat Application");
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});