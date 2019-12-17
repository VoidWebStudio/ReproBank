var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var concat = require('gulp-concat');
var connect = require('gulp-connect');
<<<<<<< HEAD
// var pug = require("gulp-pug");
=======
var pug = require("gulp-pug");
>>>>>>> 994641b0b6c61ca54ecbae6d02ad673ad387a4d0

gulp.task('connect', function(){
  connect.server({
    root: '',
    livereload: true
  });
});

gulp.task('sass',function(){
gulp.src('./scss/**/*.scss')
     .pipe(autoprefixer({
            cascade: false
        }))
    .pipe(sass())
	  .pipe(concat('styles.css'))

    .pipe(gulp.dest('./App/css/'))
});

gulp.task('livereload', function (){
  gulp.src('')
  .pipe(connect.reload());
});

gulp.task('watch', function () {
  gulp.watch('./scss/**/*.scss', ['sass' , 'livereload']);
  gulp.watch('', ['livereload']);
<<<<<<< HEAD
  // gulp.watch('./modules/**/*.pug', ['pug','livereload']);
});
// gulp.task('pug', function(){
//   return gulp.src('./App/**/*.pug')
//   .pipe(pug({
//     pretty:true
//   }))
//   .pipe(gulp.dest('./App/'));
// })

gulp.task('default', ['connect', 'watch', 'sass']);
=======
  gulp.watch('./modules/**/*.pug', ['pug','livereload']);
});
gulp.task('pug', function(){
  return gulp.src('./App/**/*.pug')
  .pipe(pug({
    pretty:true
  }))
  .pipe(gulp.dest('./App/'));
})

gulp.task('default', ['connect', 'pug', 'watch', 'sass']);
>>>>>>> 994641b0b6c61ca54ecbae6d02ad673ad387a4d0
