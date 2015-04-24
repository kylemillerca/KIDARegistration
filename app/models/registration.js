/**
 * Created by ksmiller on 4/23/2015.
 */
var mongoose = require('mongoose');

var Schema = mongoose.Schema;


var registrationSchema = new Schema({
    unit: {type: Schema.Types.ObjectId, ref: 'PerformingUnitSchema'},
    postmark: Date,
    waitListed: Boolean
});

// define our registration model
// module.exports allows us to pass this to other files when it is called
module.exports = mongoose.model('Registration', registrationSchema);