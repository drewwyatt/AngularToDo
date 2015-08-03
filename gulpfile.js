var gulp = require('gulp');
var bowerSrc = require('gulp-bower-src');
var concat = require('gulp-concat');
var gulpFilter = require('gulp-filter');
var sass = require('gulp-sass');
var ts = require('gulp-typescript');
var watch = require('gulp-watch');
var webserver = require('gulp-webserver');

var filter = gulpFilter('**/*.min.js');

gulp.task('default', ['copy-bower', 'watch', 'webserver']);

gulp.task('watch', function() {
  gulp.watch('src/**/*.ts', ['compile-typescript']);
  gulp.watch('src/**/*.scss', ['compile-sass']);
});

gulp.task('copy-bower', function() {
  bowerSrc()
        .pipe(filter)
        .pipe(concat('vendor.js'))
        .pipe(gulp.dest('www/lib'));
});

gulp.task('compile-sass', function() {
  gulp.src('src/scss/main.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('www/css'));
});

gulp.task('compile-typescript', function() {
  var tsResult = gulp.src('src/**/*.ts')
    .pipe(ts({
        noImplicitAny: true,
        out: 'app.js'
      }));
  return tsResult.js.pipe(gulp.dest('www'));
});

gulp.task('webserver', function() {
  gulp.src('www')
    .pipe(webserver({
      directoryListing: false,
      fallback: 'index.html',
      open: true
    }));
});