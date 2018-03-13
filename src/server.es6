import http from 'http';
import Server from 'socket.io';

/**
 * @param server {net.Server}
 */
function init(server){
    let io = new Server();
    io.attach(server)
    .of('multi-page-event-bus')
    .on('connection', (socket) => {
        socket.on('broadcast', (data) => {
            socket.emit('broadcast', data);
            socket.broadcast.emit('broadcast', data);
        });
    });
    return io;
}

export { init };
export default init;
