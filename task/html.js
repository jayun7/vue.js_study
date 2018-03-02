const gulp = require('gulp');
const $ = require('gulp-load-plugins')();

const config = require('../gulp-config.json');
const replacements = {
	title: 'Vue.js with Jasmine',

	description: 'Vue.js~',

	keywords: '',

	css: ``
	+ `<link rel="shortcut icon" type="image/x-icon" href="/images/common/favicon.ico[___VERSION___]" />`
	+ `<link rel="stylesheet" href="/css/style.css[___VERSION___]" />`
};

gulp.task('build:html', () => {
	let v = new Date().getTime();

	return gulp.src('./src/index.html')
		.pipe($.replace('[___TITLE___]', replacements.title))
		.pipe($.replace('[___DESCRIPTION___]', replacements.description))
		.pipe($.replace('[___KEYWORDS___]', replacements.keywords))
		.pipe($.replace('[___CSS___]', replacements.css))
		.pipe($.replace('[___UNDER_IE_10___]', replacements.underIE10))
		.pipe($.replace('[___APP___]', '/js/app.js[___VERSION___]'))
		.pipe($.replace('[___VERSION___]', '?v=' + v))
		.pipe(gulp.dest('./dist/'));
});

gulp.task('move:html', () => {
	let v = new Date().getTime();

	return gulp.src(config.html.src)
		.pipe($.replace('[___TITLE___]', replacements.title))
		.pipe($.replace('[___DESCRIPTION___]', replacements.description))
		.pipe($.replace('[___KEYWORDS___]', replacements.keywords))
		.pipe($.replace('[___CSS___]', replacements.css))
		.pipe($.replace('[___VERSION___]', '?v=' + v))
		.pipe(gulp.dest(config.html.dest));
});