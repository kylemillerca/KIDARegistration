/**
 * Created by ksmiller on 4/24/2015.
 */
var models = ['./address.js', './person.js', './performingUnit.js', './registration.js', './judgingPanel.js', './competition.js'];

exports.initialize = function() {
    var l = models.length;
    for (var i = 0; i < l; i++) {
        require(models[i])();
    }
};