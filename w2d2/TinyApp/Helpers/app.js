const http = require("http"); //require is the import of a library
const PORT = 8080; // code that both parties understand client and server (channel to communicate through) -server side

// a function which handles requests and sends response
function requestHandler(request, response) {
  if (request.url == "/") {
    response.end("Welcome!");
  } else if (request.url == "/urls") {
    response.end("www.lighthouselabs.ca\nwww.google.com");
  } else {
    response.statusCode = 404;
    response.end("Unknown Path");
  }
}   //this send the URL and REquest method which is in our case '/'' and 'GET'
module.exports = {

generateRandomString: function () {
  var text = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  for (var i = 0; i < 6; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));

  return text;
}
}

// var server = http.createServer(requestHandler); //creating a server ??? requestHandler is the callback here.
// // whenever we get a request we will use this function

// server.listen(PORT, () => { //so this is the listen function which is waiting for a response from a client
//   console.log(`Server listening on: http://localhost:${PORT}`); //when someone loads the page for the first time.
// });
