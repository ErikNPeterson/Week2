var getHTML = require('../http-functions');

var source = {
  host: 'sytantris.github.io',
  path: '/http-examples/step5.html'
};

function printLowerCase (html) {
  console.log(html.toLowerCase());
}

getHTML(source, printLowerCase);