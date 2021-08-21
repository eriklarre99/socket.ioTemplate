import express from 'express';
import { Server as WebSocketServer } from "socket.io";
import http from "http";

const app = express() 
const server = http.createServer(app); // modulo de http, le damos la configuracion de express
const io = new WebSocketServer(server); // le pasamos a web socket para que tambien cree un servidor

app.use(express.static(__dirname + "/public"));

io.on('connection', (socket) => {
    console.log(`new connection socket id: `, socket.id);

    socket.emit('ping') // emitimos un evento con ping como especie de id
    
    socket.on('pong', () => { // escuchamos el evento pong
        console.log('listened to pong');
    })
})

server.listen(3000);
console.log("Server on http://localhost:3000");
