const express = require("express");
const mongoose = require("mongoose");
const http = require("http");
const { Server } = require("socket.io");
const Message = require("./models/Message");

const app = express();
const server = http.createServer(app);
const io = new Server(server);

const PORT = 3000;

const uri = "mongodb://raoraghav28_db_user:Chatapp123@ac-c26nqnl-shard-00-00.wbekswv.mongodb.net:27017,ac-c26nqnl-shard-00-01.wbekswv.mongodb.net:27017,ac-c26nqnl-shard-00-02.wbekswv.mongodb.net:27017/chatDB?ssl=true&replicaSet=atlas-70bdex-shard-0&authSource=admin&retryWrites=true&w=majority";

mongoose.connect(uri)
    .then(() => console.log("MongoDB Connected"))
    .catch(err => console.log(err));

app.use(express.json());
app.use(express.static("public"));

app.get("/messages", async (req, res) => {
    const messages = await Message.find().sort({ timestamp: 1 });
    res.json(messages);
});

io.on("connection", (socket) => {

    console.log("User connected");

    socket.on("chatMessage", async (data) => {

        const msg = new Message({
            username: data.username,
            message: data.message
        });

        await msg.save();

        io.emit("chatMessage", msg);
    });

});

server.listen(PORT, () => {
    console.log(`Server running on ${PORT}`);
});