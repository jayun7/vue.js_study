const gulp = require('gulp');
const $ = require('gulp-load-plugins')();
const webpack = require('webpack-stream');

const debug = process.env[ 'DEBUG' ] || 'N';

gulp.task('build:app', () => {
	let v = new Date().getTime();

	return gulp.src('src/entry.js')
		.pipe(webpack(require('../webpack-config.js')))
		.pipe($.replace('[___VERSION___]', v))
		.pipe($.replace('[___DEBUG___]', debug))
		.pipe(gulp.dest('dist/js'));
});