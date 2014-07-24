var gulp = require('gulp')
        , uglify = require('gulp-uglify')
        , rename = require('gulp-rename')
        , concat = require('gulp-concat');

gulp.task('default', function() {
    gulp.src('lib/canvg.js')
            .pipe(gulp.dest('dist'))
            .pipe(uglify({
                mangle: false,
                preserveComments: 'some'
            }))
            .pipe(rename('canvg.min.js'))
            .pipe(gulp.dest('dist'));

    gulp.src(['lib/rgbcolor.js', 'lib/StackBlur.js', 'lib/canvg.js'])
            .pipe(concat('canvg.bundle.js'))
            .pipe(gulp.dest('dist'))
            .pipe(uglify({
                mangle: false,
                preserveComments: 'some'
            }))
            .pipe(rename('canvg.bundle.min.js'))
            .pipe(gulp.dest('dist'));
});