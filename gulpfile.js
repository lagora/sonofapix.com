var gulp = require('gulp');

var mjs = [
    './node_modules/jquery/dist/jquery.min.js',
    './node_modules/holder/lib/index.js',
    './node_modules/bootstrap/dist/js/bootstrap.min.js',
    './node_modules/marked/marked.min.js',
    './node_modules/moment/min/moment.min.js',
    './node_modules/list.js/dist/list.js',
    './node_modules/list.pagination.js/dist/list.pagination.min.js',
//    './blog/index.js',
//    './js/blog.js',
//    './js/sonofapix.js'
];

var concat = require('gulp-concat');

gulp.task('concat', function() {
  return gulp.src(mjs)
    .pipe(concat('dependencies.js'))
    .pipe(gulp.dest('./js/'));
});