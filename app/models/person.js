/**
 * Created by ksmiller on 4/23/2015.
 */
var mongoose = require('mongoose');
var AddressSchema = mongoose.model('Address').schema;

var Schema = mongoose.Schema;

var personSchema = new Schema({
    name: String,
    roles: [{type: String, enum: ["judge", "tabulator","timingAndPentalty", "digitalTech", "KIDAStaff", "unitDirector", "unitStaff", "showHost", "sponsor", "webAdmin"]}],
    address: [AddressSchema],
    email: String,
    phone: String,
    secondaryPhone: String,
    login: String
});

// define our registration model
// module.exports allows us to pass this to other files when it is called
module.exports = mongoose.model('Person', personSchema);