const gulp = require('gulp');

gulp.task('copy-external-module', () => {
	gulp.src(
		['external-project/web-starter-kit/dist/**/*'],
		{base: 'external-project/web-starter-kit/dist'}
	).pipe(gulp.dest('book/_book/web-starter-kit'));
});

gulp.task('watch-and-copy-external-module', () => {
	gulp.watch(['book/_book/*'], ['copy-external-module']);
});
