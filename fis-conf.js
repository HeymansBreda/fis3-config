// default settings. fis3 release

// Global start
fis.match('*.{js,css}', {
  useHash: true
});

fis.match('::image', {
  useHash: true,
  release: '/static/img$0',
});

fis.match('*.js', {
  useHash: true,
  release: '/static/js$0',
  optimizer: fis.plugin('uglify-js')
});

fis.match('*.css', {
  useHash: true,
  release: '/static/$0',
  optimizer: fis.plugin('clean-css')
});

fis.match('*.png', {
  optimizer: fis.plugin('png-compressor')
});

// Global end

// default media is `dev`
fis.media('dev')
  .match('*', {
    useHash: false,
    optimizer: null
  });

// extends GLOBAL config
fis.media('production');
