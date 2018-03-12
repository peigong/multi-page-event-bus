
const src = './src';
const dest = './dist'; 

const server = {
    src: `${ src }/server.es6`,
    dest: `${ dest }/server.js`
};
const client = {
    src: `${ src }/client.es6`,
    iife: `${ dest }/client.iife.js`,
    dest: `${ dest }/client.js`
};

export default {
    src,
    dest,
    server,
    client
};
