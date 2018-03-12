
export default {
    include: 'node_modules/**',
    namedExports: {
        'node_modules/eventemitter3/index.js': [ 'EventEmitter' ]
    }
};
