'use strict';
const { src, dest, series, watch } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const browserSync = require("browser-sync").create();

sass.compiler = require('node-sass');

// The `clean` function is not exported so it can be considered a private task.
// It can still be used within the `series()` composition.
function clean(cb) {
    // body omitted
    cb();
}
function browsersyncServe(cb) {
    browserSync.init({
        server: {
            baseDir: '.',
            port: '3000'
        }
    });
    cb();
}
function browsersyncReload(cb) {
    browserSync.reload();
    cb();
}
function compileSass() {
    return src('./sass/**/*.scss')
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(dest('./dist/'))
        .pipe(browserSync.stream());
};

function watchTask() {
    watch('*.html', browsersyncReload);
    watch(['sass/**/*.scss', './**/*.js'], series(compileSass, browsersyncReload));
}

// The `build` function is exported so it is public and can be run with the `gulp` command.
// It can also be used within the `series()` composition.
function build(cb) {
    series(gulp.parallel(browsersyncServe, watchTask))
    cb();
}

exports.build = build;
exports.default = series(
    browsersyncServe,
    watchTask
);
