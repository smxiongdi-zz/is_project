var gulp = require('gulp');
var babel = require('gulp-babel');

gulp.task("jsx", function(){
    return gulp.src("src/jsx/*.jsx")
        .pipe(babel({
            presets: ["react"]
        }))
        .pipe(gulp.dest("static/js/react/"));
});
