import del from 'del';
import gulp from 'gulp';
import loadPlugins from 'gulp-load-plugins';

import clientOptions from './build/babel.client.json';
import serverOptions from './build/babel.server.json';

const $ = loadPlugins();

const error = console.error.bind( console ); // eslint-disable-line no-console
const clean = () => del([ 'dist' ]);

function buildServer(){
    return gulp.src('./src/server.es6')
    .pipe($.babel(serverOptions))
    .pipe(gulp.dest('./dist'));
}
function buildClient(done){
    return gulp.src('./src/client.es6')
    .pipe($.babel(clientOptions))
    .pipe(gulp.dest('./dist'));
}
const build = gulp.series(clean, gulp.parallel(buildServer, buildClient));
export { build };
export default build;
