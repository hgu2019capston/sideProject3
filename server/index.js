let express = require('express')
let app = express();

let http = require('http');
let server = http.Server(app);

let socketIO = require('socket.io');
let io = socketIO(server);

const hostname = '119.205.235.198';
const port = process.env.PORT || 3000;

io.on('connection', (socket) =>{
        console.log('user connected');

        socket.on('new-message', (message) => {
                io.emit('new-message', message);
        });
});

server.listen(port, hostname, () => {
        console.log(`started running at http://${hostname}:${port}`);
        });

