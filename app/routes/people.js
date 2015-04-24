/**
 * Created by ksmiller on 4/24/2015.
 */
// grab the unit model we just created
var Person = require('./../models/person');
var ObjectId = require('mongoose').Types.ObjectId;

module.exports = function(app) {

    // server routes ===========================================================
    // handle things like api calls
    // authentication routes

    // sample api route
    app.get('/api/people', function (req, res) {
        // use mongoose to get all performing units in the database
        Person.find(function (err, people) {

            // if there is an error retrieving, send the error.
            // nothing after res.send(err) will execute
            if (err)
                res.send(err);

            res.json(people); // return all nerds in JSON format
        });
    });

    app.get('/api/people/:id', function (req, res, next) {
        // use mongoose to get all performing units in the database
        if (ObjectId.isValid(req.params.id)) {
            Person.findById(req.params.id, function (err, person) {

                // if there is an error retrieving, send the error.
                // nothing after res.send(err) will execute
                if (err)
                    return next(err);

                res.json(person); // return all nerds in JSON format
            });
        }
        else {
            res.status(400).send('Bad request, not a valid id');
        }
    });

    // route to handle creating goes here (app.post)
    app.post('/api/people', function (req, res, next) {
        var address = req.body.address;
        req.body.address = [];
        var newPerson = new Person(req.body);
        newPerson.address.push(address);
        Person.findOne({
            name: newPerson.name,
            email: newPerson.email,
        }, function (err, person) {
            if (err) return next(err);
            if (person) {
                res.json(person);
            } else {
                newPerson.save(function (err, post) {
                    if (err) return next(err);
                    res.json(post);
                });
            }
        });
    });

    // route to handle updating goes here (app.post)
    app.put('/api/people/:id', function (req, res, next) {
        if (ObjectId.isValid(req.params.id)) {
            Person.findByIdAndUpdate(req.params.id, req.body, function (err, unit) {
                if (err) return next(err);
                res.json(unit);
            });
        } else {
            res.status(400).send('Bad request, not a valid id');
        }
    });
}