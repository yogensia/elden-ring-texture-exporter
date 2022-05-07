// Gulp.js configuration.
'use strict'

// Gulp and plugins.
const gulp = require('gulp')
const newer = require('gulp-newer')

// Source and build folders.
const dir = {
  src: 'elden-ring-texture-exporter/**/*',
  build: 'D:/Mis Documentos/Adobe/Adobe Substance 3D Painter/plugins/elden-ring-texture-exporter/'
}

// Print output dirs on console.
console.log('Output Dirs:')
console.log(dir.build)
console.log()

// -------------------------------------------------------------------

// Copy plugin to Substance folder.
const compilePlugin = () => {
  return gulp
    .src(dir.src)
    .pipe(newer(dir.build))
    .pipe(gulp.dest(dir.build))
}

const watchCompilePlugin = () => {
  const watch = gulp.watch(dir.src)
  watch.on('all', (event, path) => {
    console.log(`Processing '${path}'...`)
    compilePlugin()
  })
}

// -------------------------------------------------------------------

const build = gulp.parallel(compilePlugin)
build.description = 'Compile all sources.'

const watch = gulp.parallel(watchCompilePlugin)
watch.description = 'Watch for changes to all source.'

const defaultTask = gulp.parallel(build, watch)
defaultTask.description = 'Serve & watch for changes to all source.'

// -------------------------------------------------------------------

module.exports = {
  build,
  watch,
  default: defaultTask
}
