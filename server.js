// *****************************************************************************
// Server.js - This file is the initial starting point for the Node/Express server.
//
// ******************************************************************************
// *** Dependencies
// =============================================================

//'use strict';
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var fs = require("fs");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

// Requiring our models for syncing
var db = require("./models");

// var routes = require("./controllers/controller");
// app.use("/", routes);

// Sets up the Express app to handle data parsing
var yelpData;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.text());
app.use(bodyParser.json({
  type: "application/vnd.api+json"
}));

// Static directory
app.use(express.static(__dirname + '/public'));
// Routes
// =============================================================
require("./routes/html-routes.js")(app);
require("./routes/event-api-routes.js")(app);
require("./routes/post-api-routes.js")(app);

// Routes for comments/message board
// =============================================================
// require("./routes/api-routes.js")(app);
// require("./routes/comment-html-routes.js")(app);

// Syncing our sequelize models and then starting our Express app
// =============================================================
db.sequelize.sync({ force: false }).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});
