const gulp = require('gulp');
const babel = require('gulp-babel');

gulp.task('babel', () =>
	gulp
		.src('app/main.js')
		.pipe(
			babel({
				presets: ['env', 'stage-3']
			})
		)
		.pipe(gulp.dest('dist/'))
);
gulp.task('babel:watch', () => gulp.watch('app/main.js', ['babel']));

gulp.task('default', ['babel']);
