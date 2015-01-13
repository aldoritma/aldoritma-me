var gulp       = require('gulp');
var sass       = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');

gulp.task("sass", function(){
	gulp.src("_sass/*.scss")
		.pipe(sass())
			.pipe(gulp.dest('./css'));
});


gulp.task('sass', function () {
  return gulp.src("scss/main.scss")
    .pipe(sourcemaps.init())
      .pipe(sass({
        cacheLocation: '.sass_cache',
        outputStyle: 'expanded',
        includePaths: ['node_modules/npm-anila/scss/']
      }))
    .pipe(sourcemaps.write('./maps'))
    .pipe(gulp.dest('./css'));
});