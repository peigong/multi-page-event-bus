import del from 'del';
import gulp from 'gulp';
import loadPlugins from 'gulp-load-plugins';

import conf from './build/conf';
import rollup from './build/rollup.js';
import pkg from './package.json';

const $ = loadPlugins();

const error = console.error.bind( console ); // eslint-disable-line no-console
const clean = () => del([ conf.build.dest, conf.build.tmp ]);

function lib(){
    gulp.src('./node_modules/fis-mod.js/mod.js')
    .pipe(gulp.dest(`${ conf.build.tmp }/fis`));

    return gulp.src('./node_modules/socket.io-client/dist/socket.io.js')
    .pipe(gulp.dest(`${ conf.build.dest }/socket.io`));
}
function server(){
    return gulp.src(conf.build.server.src)
    .pipe($.replace('NAME', pkg.name))
    .pipe($.babel(conf.babel.server))
    .pipe(gulp.dest(conf.build.dest));
}
function wrapper(){
    const header = `define(\'${ pkg.name }\', function(require, exports, module){\n`;
    return gulp.src(conf.build.client.dest)
    .pipe($.wrapper({
        header: header,
        footer: '});'
    }))
    .pipe($.rename('client.cjs.js'))
    .pipe(gulp.dest(conf.build.tmp));
}
const build = gulp.series(clean, gulp.parallel(lib, server, rollup.build), wrapper);
export { build };
export default build;
