var gulp = require('gulp');
var del = require('del');
var css2js = require("gulp-css2js");
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require("gulp-rename");


var path = {
    css: './src/weui.css'
};



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


gulp.task('build', ['css2js']);
