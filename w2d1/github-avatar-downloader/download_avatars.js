var request = require('request');
var getToken = require('./secrets.js');

console.log('Welcome to the GitHub Avatar Downloader!');

function getRepoContributors(repoOwner, repoName, cb) {
  var options = {

    url: "https://api.github.com/repos/" + repoOwner + "/" + repoName + "/contributors",
    headers: {
      'User-agent': 'request',
      'Authorization': "token " + getToken.GITHUB_TOKEN,
    }
  };
  // array to pass avatar URL's into
myUrl = [];

  request.get(options, function(err, res, body) {
    var data = JSON.parse(body);
    for (var i = 0; i < data.length; i++) {
      myUrl.push(data[i].avatar_url);
    }
    console.log(myUrl);
    cb(err, body);
  });
}
// callback below
getRepoContributors("jquery", "jquery", function(err, result, body) {
  // console.log("Errors:", err);
  // console.log("Result:", result);
});