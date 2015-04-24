/**
 * Created by ksmiller on 4/23/2015.
 */

var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var addressSchema = new Schema({
    street: String,
    city: String,
    state: String,
    zip: String
});

// define our registration model
// module.exports allows us to pass this to other files when it is called
module.exports = mongoose.model('Address', addressSchema);

