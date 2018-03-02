const gulp = require('gulp');
const $ = require('gulp-load-plugins')();

const config = require('../gulp-config.json');
const debug = process.env[ 'DEBUG' ] || 'N';

gulp.task('build:sass', () => {
	let v = new Date().getTime();

	return gulp.src(config.sass.src)
		.pipe($.sass({ outputStyle: debug.match(/Y/) ? 'expanded' : 'compressed' }))
		.pipe($.replace('[___VERSION___]', '?v=' + v))
		.pipe(gulp.dest(config.sass.dest))
		.pipe(gulp.dest(config.sass.asset));
});