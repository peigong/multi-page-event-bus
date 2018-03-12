import babel from 'rollup-plugin-babel'
import { client } from './babel.js';
import commonjs from 'rollup-plugin-commonjs';
import commonjsConf from './commonjs.js';
import resolve from 'rollup-plugin-node-resolve';
import resolveConf from './resolve.js';

const basePlugins = [
    babel(client),
    resolve(resolveConf),
    commonjs(commonjsConf)
];
const ENV = {
    'local': {
        prePlugins: [
        ],
        postPlagins: [
        ]
    },
    'development': {
        prePlugins: [
        ],
        postPlagins: [
        ]
    },
    'production': {
        prePlugins: [
        ],
        postPlagins: [
        ]
    }
};

function getPlugins(key){
    key = key || 'development';
    let env = ENV[key];
    return [].concat(env.prePlugins, basePlugins, env.postPlagins);
}
export default getPlugins;
