var request = require('request');
var fs = require('fs');

request.get('https://sytantris.github.io/http-examples/future.jpg')
  .on('error', function (err) {
    console.error('done broked');
  })
  .on('response', function(response) {
    console.log('Response code: ' + response.statusCode)
    console.log('Content type: ' + response.headers['content-type'])
  })
  .on('end', function (response) {
    console.log('...That jpeg thing...it downloadin...')
  })
  .pipe(fs.createWriteStream('./future.jpg'));


