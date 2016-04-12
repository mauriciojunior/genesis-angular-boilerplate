(function() {
	'use stric';

	var gulp = require('gulp')
		, browserSync = require('browser-sync')
		, uglify = require('gulp-uglify')
		, concat = require('gulp-concat');


	gulp.task('browser-sync', function() {
		browserSync({
			server: {
				baseDir: './app'
			}
		});
	});

	gulp.task('default', ['browser-sync']);
})();