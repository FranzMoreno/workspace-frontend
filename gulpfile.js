var gulp = require('gulp'),
    jade = require('gulp-jade');
    sass = require('gulp-sass');
    uglify = require('gulp-uglify');
    image = require('gulp-imagemin');
    watch = require('gulp-watch');

gulp.task('jade', function() {
  return gulp.src('src/jade/*.jade')
    .pipe(jade({
      pretty: true
    }))
    .pipe(gulp.dest('dist/'));
});

gulp.task('sass', function () {
  gulp.src('src/static/sass/*.scss')
    .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
    .pipe(gulp.dest('dist/static/css'));
});


gulp.task('js', function() {
  return gulp.src('src/static/js/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('dist/static/js'));
});

gulp.task('image', function () {
  return gulp.src('src/static/images/*')
    .pipe(imagemin({
        progressive: true
    }))
    .pipe(gulp.dest('dist/static/images'));
});

gulp.task('default', ['jade', 'sass', 'js', 'image'], function() {
  gulp.watch('src/jade/*.jade', ['jade']);
  gulp.watch('src/sass/*.scss', ['sass']);
  gulp.watch('src/js/*.js', ['js']);
});
