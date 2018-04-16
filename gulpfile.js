var gulp = require('gulp');
var sass = require('gulp-sass'); //把scss文件转换成css
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var minjs = require('gulp-uglify');
var minhtml = require('gulp-htmlmin');
var url = require('url');
var webserver = require('gulp-webserver');
var sequence = require('gulp-sequence');
var autoprefixer = require('gulp-autoprefixer');
var mincss = require('gulp-clean-css');
var clean = require('gulp-clean');

gulp.task('clean', function() {
    return gulp.src('dist')
        .pipe(clean())
})

gulp.task('mincss', function() {
    return gulp.src('src/css/*.scss')
        .pipe(sass())
        .pipe(autoprefixer({
            browers: ['last 2 versions', 'Android >= 4.0']
        }))
        .pipe(mincss())
        .pipe(gulp.dest('dist/css'))
})

gulp.task('minjs', function() {
    return gulp.src('src/js/*.js')
        .pipe(minjs())
        .pipe(gulp.dest('dist/js'))
})

var options = {
    removeComments: true, //清除HTML注释
    collapseWhitespace: true //压缩HTML
}

gulp.task('minhtml', function() {
    return gulp.src('src/*.html')
        .pipe(minhtml(options))
        .pipe(gulp.dest('dist'))
})

gulp.task('webserver', function() {
    gulp.src('src')
        .pipe(webserver({
            open: true,
            host: 'localhost',
            port: 8080,
            livereload: true,
            middleware: function(req, res, next) {
                var pathname = url.parse(req.url, true).pathname;
                if (pathname === '/newdata') {
                    res.end(JSON.stringify({
                        "first": [{
                                "icon": "icon-youhuiquan-01",
                                "tit": "领优惠券"
                            },
                            {
                                "icon": "icon-user",
                                "tit": "9.9元拼"
                            },
                            {
                                "icon": "icon-youhuiquan-01",
                                "tit": "找折扣"
                            },
                            {
                                "icon": "icon-eyeopen",
                                "tit": "唯品会"
                            }, {
                                "icon": "icon-tianmao3",
                                "tit": "挑礼物"
                            }
                        ],
                        "second": [{
                                "icon": "icon-28",
                                "tit": "领京豆"
                            },
                            {
                                "icon": "icon-youhuiquan-01",
                                "tit": "京东服饰"
                            }, {
                                "icon": "icon-pingguo",
                                "tit": "京东超市"
                            },
                            {
                                "icon": "icon-shouji",
                                "tit": "京东手机"
                            },
                            {
                                "icon": "icon-fenlei-xuanzhong",
                                "tit": "全部分类"
                            }
                        ]
                    }))
                } else {
                    next();
                }
            }
        }))
})

gulp.task('default', function(cb) {
    sequence('clean', ['mincss', 'minjs', 'minhtml'], 'webserver', cb)
})