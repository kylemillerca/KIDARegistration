/**
 * Created by ksmiller on 4/23/2015.
 */
/**
 * Created by ksmiller on 4/23/2015.
 */
var mongoose = require('mongoose');
var AddressSchema = mongoose.model('Address').schema;
var JudgingPanelSchema = mongoose.model('JudgingPanel').schema;
var RegistrationSchema = mongoose.model('Registration').schema;

var Schema = mongoose.Schema;

var competitionSchema = new Schema({
    name: String,
    date: Date,
    startTime: String,
    showAddress: [AddressSchema],
    primaryContact: {type: Schema.Types.ObjectId, ref: 'Person'},
    secondaryContact: {type: Schema.Types.ObjectId, ref: 'Person'},
    registrations: [RegistrationSchema],
    judgingPanel: [JudgingPanelSchema]
});

// define our registration model
// module.exports allows us to pass this to other files when it is called
module.exports = mongoose.model('Competition', competitionSchema);