//node server which will handle socket io connections
const io = require('socket.io')(8000)

const users = {};

io.on('connection', socket = {
    //if any user joins let others know
    socket.on('new-user-joined',name =>{
        //console.log("New user", name)
        user[socket.id] = name;
        socket.broadcast.emit('user-joined',name);
    });

    //if any user sends a message let others know
    socket.on('send', message =>{
        socket.broadcast.emit('receive', {message: message, name: users[socket.id]})
    });
    
    //if any user leaves let others know
    socket.on('disconnect', message =>{
        socket.broadcast.emit('left', users[socket.id]);
        delete users[socket.id];
    });
})