// Step 1: import gulp
const gulp = require('gulp');
const sass = require('gulp-sass');
const browser = require('gulp-browser');
const strip = require('gulp-strip-comments');

// Step 2: create default task 
gulp.task('default', ['html', 'css', 'js']);

// Step 3: create subtasks
gulp.task('html', () => {
    // Now that I have a templates directory, I also need to copy 
    // those over.
    gulp.src('templates/*.html')
        .pipe(gulp.dest('docs/templates'));

    // Copy index.html into the docs/ directory.
    return gulp.src('index.html')
        .pipe(gulp.dest('docs/'))
        .pipe(strip.text());
});

gulp.task('css', () => {
    // Convert style.scss into style.css.
    // Copy to docs/
    return gulp.src('scss/style.scss')
        .pipe(sass()) // requires gulp-sass
        .pipe(strip.text())
        .pipe(gulp.dest('docs/'));
});

gulp.task('js', () => {
    // Copy js file into docs/
    return gulp.src('js/app.js')
        .pipe(browser.browserify())
        .pipe(strip.text())
        .pipe(gulp.dest('docs/'));
});

gulp.task('watch', ['default'], () => {
    // When a js file in js/ changes, run 'js' task
    gulp.watch('js/*.js', ['js']);
    gulp.watch('js/*/*.js', ['js']);
    gulp.watch('scss/*.scss', ['css']);
    gulp.watch('*.html', ['html']);
    gulp.watch('templates/*.html', ['html']);
});