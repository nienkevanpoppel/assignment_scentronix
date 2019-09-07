
var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');

gulp.task('build', function(done) {
  gulp.src('app/scss/**/*.scss')
  .pipe(sass().on('error', sass.logError))
  .pipe(concat('main.css'))
  .pipe(gulp.dest('app/css'));
  done();
  });

 
  gulp.task('watch', function(){
    gulp.watch('app/scss/**/*.scss', gulp.series['sass']).on('change', gulp.series('build')); 
  })