# Basic chat app
Simple chat application, built with [Socket.IO](https://socket.io/), [Node.js](https://nodejs.org/) and [React](https://reactjs.org/).

## How to use
Project contains two parts, a server (Node.js) which opens a socket for accepting client connections, and a client (React) which is a chat UI for interacting with the server.
Open a terminal window and set **server** as current folder and run:

```
$ npm install
$ npm start
```

Open a new terminal window and set **client** as current folder and run same commands as above. This will open a new tab in your browser with url set to http://localhost:3000.
In the new screen, enter a username (can be any text) and click **Join chat** button, which will take you to the chat page where you can send messages to other users.
To create a conversation, open a new browser tab with address http://localhost:3000, join with another username and start chatting.
