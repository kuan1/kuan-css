const gulp = require('gulp')
const less = require('gulp-less')
const rename = require('gulp-rename')
const cleanCSS = require('gulp-clean-css')
const postcss = require('gulp-postcss')

const resetPath = 'less/reset.less'
const indexPath = 'less/index.less'

function buildLess(filePath, name = 'index') {
  return gulp
    .src(filePath)
    .pipe(less())
    .pipe(postcss([require('autoprefixer')]))
    .pipe(cleanCSS())
    .pipe(rename(`${name}.css`))
    .pipe(gulp.dest('./'))
}

async function styles() {
  await buildLess(resetPath, 'dist/reset')
  await buildLess(indexPath, 'dist/index')
}

function watch() {
  return gulp
    .src(indexPath)
    .pipe(less())
    .pipe(postcss([require('autoprefixer')]))
    .pipe(rename('./html/index.css'))
    .pipe(gulp.dest('./'))
}

exports.watch = () => {
  watch()
  gulp.watch(['./less/**/*.less'], watch)
}

exports.default = styles
