var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);

server.listen(2000, (() => {
    console.log("SERVER")
}));

let currentConnections = {};
io.on('connection', function (socket) {
    socket.on("user-joined", (name) => {
        currentConnections[socket.id] = name;
        io.emit("new-user", name);
    })

    socket.on("disconnect", () => {
        delete currentConnections[socket.id]
    })

});