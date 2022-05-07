// Log to console.
function log(msg, mode) {
  switch(mode) {
    case 'info':
      alg.log.info(msg)
      break
    case 'warn':
      alg.log.warn(msg)
      break
    case 'error':
      alg.log.error(msg)
      break
  }
}

// Run export from Substance Painter.
function exportMaps(dir) {
  return alg.mapexport.exportDocumentMaps(
    'Elden Ring',
    dir,
    'tga'
  )
}

// Custom function to flatten arrays.
Object.defineProperty(Array.prototype, 'flat', {
  value: function(depth = 1) {
    return this.reduce(function (flat, toFlatten) {
      return flat.concat((Array.isArray(toFlatten) && (depth>1)) ? toFlatten.flat(depth-1) : toFlatten)
    }, [])
  }
});

// Get file paths from texture set object.
function getPaths(maps) {
  return Object.values(maps).map(Object.values).flat(10)
}

// Pass images to texconv and compress them acording to their suffix.
function tga2dds(paths, exportPath) {
  const texconv = `${alg.plugin_root_directory}DirectXTex/texconv.exe`

  paths.forEach(path => {
    if (path.endsWith('_a.tga')) {
      alg.log.info(`Saved ${path.split('/').pop()} as Albedo (BC7 sRGB)...`)
      alg.subprocess.check_output([
        texconv,
        '-f',
        'BC7_UNORM_SRGB',
        '-nologo',
        '-y',
        '-m',
        '11',
        '-srgb',
        path
      ])
    } else if (path.endsWith('_m.tga')) {
      alg.log.info(`Saved ${path.split('/').pop()} as Metal (BC4 Linear)...`)
      alg.subprocess.check_output([
        texconv,
        '-f',
        'BC4_UNORM',
        '-nologo',
        '-y',
        '-m',
        '11',
        path
      ])
    } else if (path.endsWith('_n.tga')) {
      alg.log.info(`Saved ${path.split('/').pop()} as Normal (BC7 Linear)...`)
      alg.subprocess.check_output([
        texconv,
        '-f',
        'BC7_UNORM',
        '-nologo',
        '-y',
        '-m',
        '11',
        path
      ])
    }
  })
}

// Get things started.
function run(dir) {
  let exportPath = alg.mapexport.exportPath()
  alg.log.info(`Elden Ring Texture Exporter by Yogensia`)
  alg.log.info(`Exporting to ${exportPath}...`)
  // alg.log.info(`Save state: ${alg.project.needSaving()}`)
  // alg.log.info(`Plugin Path ${alg.plugin_root_directory}`)

  let maps = exportMaps(exportPath)
  let paths = getPaths(maps)
  alg.log.info(`Compressing to DDS...`)
  tga2dds(paths, exportPath)
  alg.log.info(`Operation Finished.`)
}
