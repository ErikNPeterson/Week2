// buffering technique append the data chunks together in a variable
var https = require('https');

function getAndPrintHTML(hostAndPath){

// combine two strings and give it back to the viewer either the whole page or just those objects
//access both strings in our object by their keys and push them together in one string to create a URL
//
// notice that https.get takes a callback with one parameter -
// response, which is a Stream that represents the HTTP response
https.get(source, function (response) {

  // set encoding of received data to UTF-8
  response.setEncoding('utf8');

  // the callback is invoked when a `data` chunk is received
response.on('data', function (data) {
  var appendChunksOfData = new Buffer(data)
    console.log(appendChunksOfData.toString());
  });

  // the callback is invoked when all of the data has been received
  // (the `end` of the stream)
  response.on('end', function() {
    console.log('Response stream complete.');
  });
  // do I use finish here ??
});
}

var source = {
    host: 'sytantris.github.io',
    path: '/http-examples/step1.html'
  };

getAndPrintHTML(source);
//console.log(appendChunksOfData);
