
var https = require('https');

function getHTML(hostAndPath, callback){

https.get(source, function (response) {


  response.setEncoding('utf8');

response.on('data', function (data) {
  var appendChunksOfData = new Buffer(data)
    callback(appendChunksOfData.toString());
  });

  response.on('end', function() {
    console.log('Response stream complete.');
  });

});
}

function printHTML (html) {
  console.log(html);
}

var source = {
    host: 'sytantris.github.io',
    path: '/http-examples/step1.html'
  };

getHTML(source, printHTML);
//console.log(appendChunksOfData);
