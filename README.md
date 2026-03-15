# MERN Real-Time Chat Application

## Overview

This project is a **real-time chat application** built using Node.js, Express, MongoDB Atlas, Mongoose, and Socket.IO.
It allows multiple users to send and receive messages instantly while storing the chat history in a MongoDB database.

The application demonstrates backend development concepts such as real-time communication, REST APIs, database integration, and automated testing.

---

## Features

* Real-time messaging using Socket.IO
* MongoDB Atlas cloud database integration
* Message storage with timestamps
* Chat history loading when the page opens
* Basic frontend chat interface
* Automated testing using Mocha and Chai

---

## Technologies Used

* Node.js
* Express.js
* MongoDB Atlas
* Mongoose
* Socket.IO
* Mocha
* Chai
* HTML / CSS / JavaScript

---

## Project Structure

```
realtime-chat-app
│
├── models
│   └── Message.js
│
├── public
│   └── index.html
│
├── test
│   └── app.test.js
│
├── server.js
├── package.json
├── package-lock.json
└── README.md
```

---

## Installation

1. Clone the repository

```
git clone https://github.com/your-username/realtime-chat-app.git
```

2. Navigate to the project folder

```
cd realtime-chat-app
```

3. Install dependencies

```
npm install
```

---

## Running the Application

Start the server:

```
node server.js
```

or

```
npm start
```

Open the application in your browser:

```
http://localhost:3000
```

Open multiple tabs to test real-time chat.

---

## Running Tests

Run the automated tests using Mocha:

```
npx mocha
```

Expected output:

```
Server Test
✔ should return status 200 from root route
1 passing
```

---

## How It Works

1. The client sends a message using Socket.IO.
2. The Node.js server receives the message.
3. The server saves the message to MongoDB using Mongoose.
4. The server broadcasts the message to all connected clients.
5. All users see the message instantly.

---

## Future Improvements

* User authentication
* Chat rooms
* Message timestamps in UI
* Improved chat interface
* Message deletion and editing
* Typing indicators

---

## Author

Raghav
