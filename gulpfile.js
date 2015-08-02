var gulp = require('gulp');
var ts = require('gulp-typescript');
var watch = require('gulp-watch');

gulp.task('default', ['watch']);

gulp.task('watch', function() {
  gulp.watch('src/**/*.ts', ['compile-typescript']);
});

gulp.task('compile-typescript', function() {
  var tsResult = gulp.src('src/**/*.ts')
    .pipe(ts({
        noImplicitAny: true,
        out: 'app.js'
      }));
  return tsResult.js.pipe(gulp.dest('www'));
});