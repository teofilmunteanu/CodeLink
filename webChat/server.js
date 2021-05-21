const express = require('express');
const app = express();

const http = require('http').Server(app);
const io = require('socket.io')(http);

const PORT = process.env.PORT || 3000;

app.use(express.static('public'));

http.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
});

app.get('/chat/:id', (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

io.on('connection', (socket) => {
    
    socket.on('join-room', (id) => {
        socket.broadcast.emit("user-connected", id);

        socket.on('disconnect', () => {
            socket.broadcast.emit('user-disconnected', id);
        });
    
    });

    socket.on('join', (name) => {
        console.log(name);
        socket.broadcast.emit('join', name);
    });

    socket.on('chat message', (data) => {
        socket.broadcast.emit('chat message', data);
    });

   
});