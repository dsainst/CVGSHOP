//���������� ����������� �������
var gulp = require('gulp'),
    less = require('gulp-less'),
    autoprefixer = require('gulp-autoprefixer'),
    concatCss = require('gulp-concat-css'),
    minifyCss = require('gulp-minify-css'),
    imagemin = require('gulp-imagemin'),
    rev_append = require('gulp-rev-append'),
    livereload = require('gulp-livereload'),
    spritesmith = require('gulp.spritesmith'),
    rename = require('gulp-rename'),
    uglify = require('gulp-uglify'),
    gutil = require('gulp-util'),
    sftp = require('gulp-sftp');

// less process...
gulp.task('less', function () {
    return gulp.src('dev/css/**/*.less')
        .pipe(less())
        .pipe(gulp.dest('dev/css/'));
});

// html process...
gulp.task('rev_append', function () {
    return gulp.src('dev/index.html')
        .pipe(rev_append())
        .pipe(gulp.dest(''))
        .pipe(livereload());
});

// image process...
gulp.task('image', function () {
    return gulp.src('dev/image/*')
        .pipe(gulp.dest('tpl/img'))
        .pipe(livereload());
});

// sprite process...
gulp.task('sprite', function () {
    var spriteData = gulp.src('dev/img/*.png').pipe(spritesmith({
        imgName: 'img/sprite.png',
        cssName: 'css/sprite.css'
    }));
    return spriteData.pipe(gulp.dest('tpl/'))
        .pipe(livereload());
});

gulp.task('svg_sprite', function () {
    return gulp
        .src('dev/img/svg/**/*.svg')
        .pipe(gulp.dest('tpl/img/svg'));
});

// js process...
gulp.task('js', function () {
    return gulp.src('dev/js/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('tpl/js/'))
        .pipe(livereload());
});

// css process...
gulp.task('default', ['less'], function () {
    gulp.src('dev/css/**/*.css')
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(concatCss("style.min.css"))
        .pipe(minifyCss({compatibility: 'ie8'}))
        .pipe(gulp.dest('tpl/css/'))
        .pipe(livereload());
});
gulp.task('upload', function () {
    return gulp.src('tpl/css/style.min.css')
        .pipe(sftp({
            host: 'spb47.ru',
            user: 'tbobtzu_boss',
            pass: 'gjohnzgc',
            remotePath: '/tpl/css/'
        }))
        // you need to have some kind of stream after gulp-ftp to make sure it's flushed
        // this can be a gulp plugin, gulp.dest, or any kind of stream
        // here we use a passthrough stream
        .pipe(gutil.noop());
});

// watcher must always is on
gulp.task('watch', function () {
    //livereload.listen();
    gulp.watch('dev/css/**/*.less', ['default']);
    gulp.watch('dev/js/*.js', ['js']);
    gulp.watch('dev/index.html', ['rev_append']);
    gulp.watch('dev/img/*', ['sprite']);
    gulp.watch('dev/img/svg/*', ['svg_sprite']);
    gulp.watch('dev/image/*', ['image']);
})