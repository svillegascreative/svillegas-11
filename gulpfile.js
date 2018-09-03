var gulp = require('gulp');
var sourcemaps = require('gulp-sourcemaps');
var sass = require('gulp-sass');
var babel = require('gulp-babel');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var shell = require('gulp-shell');

var paths = {
	styleSrc: 'src/_scss/*.scss',
	scriptSrc: 'src/_js/*.js',
	styleDest: '_site/css',
	scriptDes: '_site/js'
};

gulp.task('styles', function () {
	return gulp.src(paths.styleSrc)
		.pipe(sourcemaps.init())
		.pipe(sass({
			outputStyle: 'compressed'
		}).on('error', sass.logError))
		.pipe(sourcemaps.write())
		.pipe(gulp.dest(paths.styleDest))
});

gulp.task('scripts', function () {
	return gulp.src(paths.scriptSrc)
	.pipe(sourcemaps.init())
	.pipe(babel())
	.pipe(concat('scripts.js'))
	.pipe(uglify())
	.pipe(sourcemaps.write('.'))
	.pipe(gulp.dest(paths.scriptDest))
});

gulp.task('generate', shell.task('eleventy'));