var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 8081;

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


var apiRoutes = require(path.join(__dirname, "app", "routing", "apiRoutes"));
var htmlRoutes = require(path.join(__dirname,"app", "routing", "htmlRoutes"));

app.use('/api/friends',apiRoutes);
app.use('/', htmlRoutes);


app.listen(PORT, function() {
    console.log("Server started listening on http://localhost:" + PORT);
});