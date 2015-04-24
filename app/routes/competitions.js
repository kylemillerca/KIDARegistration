/**
 * Created by ksmiller on 4/24/2015.
 */
// grab the unit model we just created
var PerformingUnit = require('./../models/performingUnit');
var ObjectId = require('mongoose').Types.ObjectId;

module.exports = function(app) {

/*    // server routes ===========================================================
    // handle things like api calls
    // authentication routes

    // sample api route
    app.get('/api/units', function (req, res) {
        // use mongoose to get all performing units in the database
        PerformingUnit.find(function (err, units) {

            // if there is an error retrieving, send the error.
            // nothing after res.send(err) will execute
            if (err)
                res.send(err);

            res.json(units); // return all nerds in JSON format
        });
    });

    app.get('/api/units/:id', function (req, res, next) {
        // use mongoose to get all performing units in the database
        if (ObjectId.isValid(req.params.id)) {
            PerformingUnit.findById(req.params.id, function (err, units) {

                // if there is an error retrieving, send the error.
                // nothing after res.send(err) will execute
                if (err)
                    return next(err);

                res.json(units); // return all nerds in JSON format
            });
        }
        else {
            res.status(400).send('Bad request, not a valid id');
        }
    });

    // route to handle creating goes here (app.post)
    app.post('/api/units', function (req, res, next) {
        var newUnit = new PerformingUnit(req.body);
        PerformingUnit.findOne({
            name: newUnit.name,
            discipline: newUnit.discipline,
            competitiveClass: newUnit.competitiveClass
        }, function (err, unit) {
            if (err) return next(err);
            if (unit) {
                res.status(409).json({error: 'Unit already exists'});
                next()
            } else {
                newUnit.save(function (err, post) {
                    if (err) return next(err);
                    res.json(post);
                });
            }
        });
    });

    // route to handle updating goes here (app.post)
    app.put('/api/units/:id', function (req, res, next) {
        if (ObjectId.isValid(req.params.id)) {
            PerformingUnit.findByIdAndUpdate(req.params.id, req.body, function (err, unit) {
                if (err) return next(err);
                res.json(unit);
            });
        } else {
            res.status(400).send('Bad request, not a valid id');
        }
    });*/
}