const gulp = require('gulp');
const $ = require('gulp-load-plugins')();

const config = require('../gulp-config.json');
const publish = process.env[ 'PUBLISH' ] || 'N';

gulp.task('move:image', () => {
	return gulp.src(config.image.src)
		.pipe(gulp.dest(config.image.dest));
});

gulp.task('move:example', () => {
	return publish.match(/Y/) && gulp.src(config.example.src)
			.pipe(gulp.dest(config.example.dest));
});

gulp.task('move:publish', () => {
	return publish.match(/Y/) && gulp.src(config.publish.src)
			.pipe(gulp.dest(config.publish.dest));
});