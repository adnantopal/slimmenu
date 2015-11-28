"use strict";

var gulp = require('gulp'),
    sass = require('gulp-sass'),
    rename = require('gulp-rename'),
    uglify = require('gulp-uglify');

gulp.task('compile-scss', function () {
    gulp.src('./src/scss/*.scss')
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest('./dist/css'));
});

gulp.task('minify-js', function () {
    gulp.src('./src/js/*.js')
        .pipe(uglify())
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest('./dist/js'));
});

gulp.task('watch', function () {
    gulp.watch('./src/scss/*.scss', ['compile-scss']);
});

gulp.task('build', ['compile-scss', 'minify-js']);