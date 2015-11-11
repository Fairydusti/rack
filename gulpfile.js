var gulp = require('gulp');
var watch = require('gulp-watch');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var sassdoc = require('sassdoc');
var react = require('gulp-react');
var jsxTransform = require('gulp-jsx');
var cache = require('gulp-cached');
var livereload = require('gulp-livereload');
var browserify = require('browserify');
var reactify = require('reactify');
//var reactTools = require('react-tools');

gulp.task('default', ['sass','jsx-trans']);
 // Jsx tranform thing

 gulp.task('browserify', function(){
  var b = browserify();
  b.transform(reactify); // use the reactify transform
  b.add('./rack/js/main.js');
  return b.bundle()
    .pipe(source('main.js'))
    .pipe(gulp.dest('./rack/js/'));
});


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
var jsxOutput = './rack/js/';
var jsxInput = './rack/jsx/**/*.jsx';


gulp.task('jsx-trans', function () {
    return gulp
      .src(jsxInput)
        .pipe(jsxTransform({
          factory: 'React.createClass'
        }))
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
// 
//
gulp.task('watch', function () {
   gulp.watch(sassInput, ['sass']);
   gulp.watch(jsxInput, ['jsx-trans']);
   gulp.watch('gulpfile.js', ['watch']);
});

gulp.task('livereload', function(){
   livereload.listen();
   livereload.reload('rack/index.html');
});
