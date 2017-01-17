var gulp = require('gulp'),
    autoprefixer = require('gulp-autoprefixer'),
    less = require('gulp-less'),
    concat = require('gulp-concat'),//文件合并
    minify = require('gulp-minify-css'),//css压缩
    rename = require('gulp-rename'),
    uglify = require('gulp-uglify');
//默认执行任务
gulp.task('default', function () {
    //找到src目录下app.css，为其补全浏览器兼容的css
    return gulp.src('src/app.css')
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        //输出到dist文件夹
        .pipe(gulp.dest('dist'));
});


//定义一个testLess任务（自定义任务名称）
gulp.task('testLess', function () {
    gulp.src('src/less/index.less') //该任务针对的文件
        .pipe(less()) //该任务调用的模块
        .pipe(gulp.dest('src/css')); //将会在src/css下生成index.css
});

gulp.task('default2',['testLess', 'elseTask']); //定义默认任务 elseTask为其他任务，该示例没有定义elseTask任务


gulp.task('minifyCss', function(){
    return gulp.src('src/pack-css/*.css')
        .pipe(rename({suffix: '.min'}))
        .pipe(minify())
        .pipe(concat('main.css'))
        .pipe(gulp.dest('dist/css'));
});


gulp.task('minifyJs', function(){
    return gulp.src('src/js/*.js')
        .pipe(uglify())
       // .pipe(rename({suffix: '.min'}))
      //  .pipe(concat('anchor-webs.js'))
        .pipe(gulp.dest('dist/js'));
});

gulp.task('kedoJs', function(){
    return gulp.src('E:/anchors/js/sea-modules/debug/*.js')
        .pipe(uglify())
       // .pipe(rename({suffix: '.min'}))
      //  .pipe(concat('anchor-webs.js'))
         .pipe(gulp.dest('dist/js'));
});
