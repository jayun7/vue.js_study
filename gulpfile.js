'use strict';

const path = require('path');
const gulp = require('gulp');
const gulpsync = require('gulp-sync')(gulp);

require('require-all')(path.resolve(__dirname, 'task'));

gulp.task('build', gulpsync.sync([ 'build:sass', 'move:image', 'move:html', 'build:html', 'move:publish', 'build:app' ]));
