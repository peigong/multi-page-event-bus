import babel from 'rollup-plugin-babel'
import { client } from './babel.js';
import replace from 'rollup-plugin-replace';
import commonjs from 'rollup-plugin-commonjs';
import commonjsConf from './commonjs.js';
import resolve from 'rollup-plugin-node-resolve';
import resolveConf from './resolve.js';
import pkg from '../../package.json';

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
            replace({ 'NAME': pkg.name })
        ]
    },
    'development': {
        prePlugins: [
        ],
        postPlagins: [
            replace({ 'NAME': pkg.name })
        ]
    },
    'production': {
        prePlugins: [
        ],
        postPlagins: [
            replace({ 'NAME': pkg.name })
        ]
    }
};

function getPlugins(key){
    key = key || 'development';
    let env = ENV[key];
    return [].concat(env.prePlugins, basePlugins, env.postPlagins);
}
export default getPlugins;
