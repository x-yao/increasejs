require('colors');
var path = require('path'),
    gulp = require('gulp'),
    kcode = require('gulp-kcode'),
    del = require('del'),
    plumber = require('gulp-plumber');

var isBuild = true;


function getPkg() {
    return require(path.join(process.cwd(), 'package.json'));
}

function err(error) {
    console.error('[ERROR]'.red + error.message);
    this.emit('end');
}

gulp.task('clean', function (cb) {
    isBuild ? del(['build'], cb) : cb();
});


gulp.task("copy", ["clean"], function () {
    return gulp.src(["src/**/*.png", "src/**/*.jpg", "src/**/*.jpeg", "src/**/*.gif", "src/**/*.html", "src/**/*.htm", "src/**/*.ttf", "src/**/*.eot", "src/**/*.svg", "src/**/*.woff"])
        .pipe(gulp.dest("build"));
});

gulp.task('build',['default']);

gulp.task('default', ['clean', 'js', 'css', 'copy']);

//task:js for watch
gulp.task('js', ['clean'], function () {
    return gulp.src(['src/**/*.js'])
        .pipe(plumber(err))
        .pipe(kcode.minify())
        .pipe(gulp.dest('build'));
});
//task:css for watch
gulp.task('css', ['clean'], function () {
    return gulp.src(['src/**/*.css'])
        .pipe(plumber(err))
        .pipe(kcode.minify())
        .pipe(gulp.dest('build'));
});

gulp.task('watch', ['default'], function () {
    isBuild = false;
    gulp.watch('src/**/*.js', ['js']);
    gulp.watch('src/**/*.css', ['css']);
});
