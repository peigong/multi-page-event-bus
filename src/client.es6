import { EventEmitter } from 'eventemitter3';

let bus = {};
const EE = new EventEmitter();

const socket = io('/multi-page-event-bus');
socket.on('broadcast', (o) => {
    try{
        let json = JSON.parse(o);
        if(json.event && json.data){
            EE.emit(json.event, json.data);
        }
    }catch(ex){
        console.error(ex);
    }
});
socket.open();

function on(event, listener){
    EE.on(event, listener, bus);
}

function emit(event, data){
    let o = { event, data };
    socket.emit('broadcast', JSON.stringify(o));
}

export {
    on,
    emit
};
