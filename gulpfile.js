var gulp = require('gulp');
var minImage = require('gulp-imagemin');
var miniJs = require('gulp-uglyfly');
var miniCss = require('gulp-clean-css');
var postCss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var miniHtml = require('gulp-htmlclean');
var less = require('gulp-less');
var connect = require('gulp-connect');
var redebug = require('gulp-strip-debug');
var folder = {
    src : 'src/',
    dist : 'dist/'
}
gulp.task('html',function () {
    gulp.src(folder.src + 'html/*')
        .pipe(connect.reload())
        .pipe(miniHtml())
        .pipe(gulp.dest(folder.dist + 'html/'))
})
gulp.task('css',function () {
    gulp.src(folder.src + 'css/*')
        .pipe(connect.reload())
        .pipe(less())
        .pipe(postCss([autoprefixer()]))
        .pipe(miniCss())
        .pipe(gulp.dest(folder.dist + 'css/'))
})
gulp.task('js',function () {
    gulp.src(folder.src + 'js/*')
        .pipe(connect.reload())
        // .pipe(redebug())
        .pipe(miniJs())
        .pipe(gulp.dest(folder.dist + 'js/'))
})
gulp.task('img',function () {
    gulp.src(folder.src + 'images/*')
        .pipe(minImage())
        .pipe(gulp.dest(folder.dist + 'images/'))
})
gulp.task('server',function () {
    connect.server({
        port : 9999,
        livereload : true
    })
})
gulp.task('watch',function () {
    gulp.watch(folder.src + 'html/*',['html'])
    gulp.watch(folder.src + 'js/*',['js'])
    gulp.watch(folder.src + 'css/*',['css'])
})
gulp.task('default',['html','css','js','img','server','watch']);
