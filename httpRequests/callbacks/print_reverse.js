var getHTML = require('../http-functions');

var source = {
  host: 'sytantris.github.io',
  path: '/http-examples/step5.html'
};

function printReverse (html) {
  console.log(html.split("").reverse().join(""));
}

getHTML(source, printReverse);