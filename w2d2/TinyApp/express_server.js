

var express = require("express");
var helpers = require("./Helpers/app.js")
var app = express();
var PORT = 8080; // default port 8080

app.set("view engine", "ejs")

var urlDatabase = {
  "b2xVn2": "http://www.lighthouselabs.ca",
  "9sm5xK": "http://www.google.com",
  "helloWorld": "http://www.occasionallyCode.com"
};
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended: true}));


app.get("/", (req, res) => {
  res.send("Hello!");
});

app.get("/urls.json", (req, res) => {
  res.json(urlDatabase);
});

app.get("/hello", (req, res) => {
  res.send("<html><body>Hello <b>World</b></body></html>\n");
});

app.get("/urls", (req, res) => {
  let templateVars = { urls: urlDatabase };
  res.render("urls_index", templateVars);
});

app.get("/urls/new", (req, res) => { // this must come before before the one before.
  res.render("urls_new");
});

app.get("/u/:shortURL", (req, res) => {
  var shortURL = req.params.shortURL;
  let longURL = urlDatabase[shortURL]; // thinking about how to access this via a call back from the app get below
  res.redirect(longURL);
});

app.get("/urls/:id", (req, res) => { // url/b2xVn2 the : changes id to id in this function
  let templateVars = { shortURL: req.params.id, fullURL: urlDatabase[req.params.id] };
  res.render("urls_show", templateVars);
});

app.post("/urls", (req, res) => {
  console.log(req.body);  // debug statement to see POST parameters
  let newURL = helpers.generateRandomString();
  urlDatabase[newURL] = req.body.longURL; // the body is an object from the form containing our input URL
  res.redirect(`/urls/${newURL}`);         // Respond with 'Ok' (we will replace this)
});


app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}!`);
});