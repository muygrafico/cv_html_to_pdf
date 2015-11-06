var gulp  = require('gulp'),
    gutil = require('gulp-util');
    html2pdf = require('gulp-html2pdf');
    sass = require('gulp-sass');

gulp.task('default', function() {
  return gutil.log('Gulp is running!')
});

gulp.task('pdf', function () {
    return gulp
        .src('src/*.html')
        .pipe(html2pdf())
        .pipe(gulp.dest('pdf/'));
});

gulp.task('sass', function () {
  gulp.src('src/scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('src/css'));
});

gulp.task('sass:watch', function () {
  gulp.watch('src/scss/**/*.scss', ['sass']);
});
