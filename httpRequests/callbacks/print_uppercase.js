var getHTML = require('../http-functions');

var source = {
  host: 'sytantris.github.io',
  path: '/http-examples/step5.html'
};

function printUppercase (html) {
  console.log(html.toUpperCase());
}

getHTML(source, printUppercase);