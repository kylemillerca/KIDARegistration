// app/routes.js

// grab the unit model we just created
var PerformingUnit = require('./../models/performingUnit');
var ObjectId = require('mongoose').Types.ObjectId;

module.exports = function(app) {
    require("./units.js")(app);
    require("./people.js")(app);
    require("./competitions.js")(app);

    // frontend routes =========================================================
    // route to handle all angular requests
    app.get('*', function(req, res) {
        res.sendfile('./public/index.html'); // load our public/index.html file
    });
};