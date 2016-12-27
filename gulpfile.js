var gulp = require('gulp');
var del = require('del');
var css2js = require("gulp-css2js");
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require("gulp-rename");
var download = require("gulp-download");
var replace = require('gulp-replace');
var runSequence = require('run-sequence');


var path = {
    css: './src/weui.css'
};

var baseUrl = 'https://raw.githubusercontent.com/weui/weui/master/dist/style/weui.css';


gulp.task('default', function(callback) {
    runSequence('download', 'update', 'css2js', callback);
});



gulp.task('css2js', function() {
    return gulp.src(path.css)
        .pipe(css2js())
        .pipe(gulp.dest("./dist/"))
        .pipe(uglify())
        .pipe(rename({
            extname: '.min.js'
        }))
        .pipe(gulp.dest("./dist/"));
});



gulp.task('download', function() {
    return download(baseUrl)
        .pipe(gulp.dest("src/"));
});


gulp.task('update', function() {
    return gulp.src(path.css)
        .pipe(replace(/html(.|\n)*@font-face/, '\/*针对Ionic做了部分修正*\/\n@font-face'))
        .pipe(gulp.dest("src/"));
});


gulp.task('build', ['css2js']);
