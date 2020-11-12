const express = require('express')
const cors = require('cors')
const http = require('http')

const app = express()
app.use(cors())

const server = http.createServer(app)

const connectedUsers = new Set()

const io = require('socket.io')(server, {
  cors: {
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST'],
  },
})

io.on('connection', (client) => {
  let addedUser = false

  client.on('join', (username) => {
    if (addedUser) {
      return
    }

    addedUser = true
    client.username = username
    connectedUsers.add(username)
    client.broadcast.emit('user joined', username)
    io.emit('users', [...connectedUsers])
  })

  client.on('message', (message) => {
    client.broadcast.emit('message', { sender: client.username, message })
  })

  client.on('disconnect', () => {
    if (addedUser) {
      connectedUsers.delete(client.username)
      client.broadcast.emit('user left', client.username)
      io.emit('disconnected', [...connectedUsers])
    }
  })
})

const port = 3001

server.listen(port, () => {
  console.log(`Listening on port ${port}`)
})
