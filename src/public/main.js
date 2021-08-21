// io('http://localhost:3000')
const socket = io() // por defecto escuchara el puerto desde donde es servido

socket.on('ping', () => {
    console.log("listened to ping");
    
    socket.emit('pong')
})