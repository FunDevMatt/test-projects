var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);

server.listen(2000, (() => {
    console.log("SERVER")
}));

let currentConnections = {};
io.on('connection', function (socket) {

    console.log(currentConnections)
    socket.emit("load-current-users", currentConnections);

    socket.on("new-user", (data) => {
        if (!currentConnections[socket.id]) {
            currentConnections[socket.id] = {
                top: 0,
                left: 0
            };
            io.emit("add-user", {
                name: data,
                socketId: socket.id
            })

        }

    })

    socket.on("disconnect", () => {
        delete currentConnections[socket.id];
        io.emit("user-left", socket.id)
    })

    socket.on("user-move-down", () => {
        let user = currentConnections[socket.id];
        if (user) {
            user.top = user.top + 100;
            io.emit("move-user-down", {
                socketId: socket.id,
                top: user.top
            });

        }

    })

});