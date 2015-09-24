var gulp = require('gulp');
var watch = require('gulp-watch');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var sassdoc = require('sassdoc');
var react = require('gulp-react');
var cache = require('gulp-cached');

gulp.task('default', ['sass','jsx-trans']);



//Sass compile
var sassInput = './rack/styles/scss/**/*.scss';
var sassOutput = './rack/styles/css/';


var sassOptions = {
  errLogToConsole: true,
  outputStyle: 'expanded'
};

gulp.task('sass', function () {
  return gulp
    .src(sassInput)
    .pipe(sourcemaps.init())
    .pipe(sass(sassOptions).on('error', sass.logError))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(sassOutput))
    .pipe(sassdoc())
    // Release the pressure back and trigger flowing mode (drain)
    // See: http://sassdoc.com/gulp/#drain-event
    .resume();
});
//Lint/cache js files (not implemented yet)
gulp.task('lint', function(){
  return gulp.src('files/*.js')
    .pipe(cache('linting'))
    .pipe(jshint())
    .pipe(jshint.reporter())
});

gulp.task('watch', function(){
  gulp.watch('files/*.js', ['lint']);
});

//Set jsx-transform for react
var jsxOutput = 'rack/js/';
var jsxInput = 'rack/jsx/**/*.jsx';


gulp.task('jsx-trans', function () {
    return gulp
      .src(jsxInput)
        .pipe(react())
        .pipe(gulp.dest(jsxOutput))
        .resume();
});


//Creating gulp watch

// gulp.task('stream', function () {
//     return gulp.src('css/**/*.css')
//         .pipe(watch('css/**/*.css'))
//         .pipe(gulp.dest('build'));
// });
 
// gulp.task('callback', function (cb) {
//     watch('css/**/*.css', function () {
//         gulp.src('css/**/*.css')
//             .pipe(watch('css/**/*.css'))
//             .on('end', cb);
//     });
// });

gulp.task('watch', function () {
   gulp.watch(sassInput, ['sass']);
   gulp.watch(jsxInput, ['jsx-trans'])
});
