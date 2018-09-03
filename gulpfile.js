var gulp = require('gulp');
var sourcemaps = require('gulp-sourcemaps');
var sass = require('gulp-sass');
var babel = require('gulp-babel');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var shell = require('gulp-shell');

var paths = {
	styleSrc: 'assets/scss/**/*.scss',
	scriptSrc: 'assets/js/**/*.js',
	styleDest: 'site/css',
	scriptDest: 'site/js'
};

gulp.task('styles', function () {
	return gulp.src(paths.styleSrc)
		.pipe(sourcemaps.init())
		.pipe(sass({
			outputStyle: 'compressed',
			errLogToConsole: true
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

gulp.task('serve', shell.task('eleventy --serve'));

gulp.task('watch', ['styles', 'scripts'], function() {
	gulp.watch(paths.styleSrc, ['styles']);
	gulp.watch(paths.scriptSrc, ['scripts']);
});

gulp.task('default', ['watch', 'serve']);