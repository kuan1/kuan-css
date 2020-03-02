const gulp = require('gulp')
const less = require('gulp-less')
const rename = require('gulp-rename')
const cleanCSS = require('gulp-clean-css')
const postcss = require('gulp-postcss')

const lessPath = 'less/index.less'

function styles() {
  return gulp
    .src(lessPath)
    .pipe(less())
    .pipe(postcss([require('autoprefixer')]))
    .pipe(cleanCSS())
    .pipe(rename('index.css'))
    .pipe(gulp.dest('./'))
}

exports.default = styles
