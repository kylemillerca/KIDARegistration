// app/models/registration.js
// grab the mongoose module
var mongoose = require('mongoose');
var Person = require('./person');

var Schema = mongoose.Schema;

var performingUnitSchema = new Schema({
    name: {type:String, required:true},
    classification : {type: String, enum: ['Scholastic', 'Independent'], required:true},
    discipline: {type: String, enum: ["Color Guard", "Moving Percussion","Percussion Ensemble", "Marching Winds", "Majorette", "Dance Team"], required:true},
    competitiveClass: {type: String, enum:["Middle School Cadet", "Middle School Competitive", "Middle School", "Bronze", "Gold", "White", "Blue", "Platinum", "World", "Junior", "Senior", "Open"], required: true},
    unitCity: {type:String, required:true},
    unitState: {type:String, required:true},
    primaryContact: {type: Schema.Types.ObjectId, ref: 'Person'},
    secondaryContact: {type: Schema.Types.ObjectId, ref: 'Person'},

    showTitle: String,
    showSubtitle: String,
    showDescription: String,
    studentLeaders: [String],
    staff: [String],
    roster: [String],
    history: String,
    pathToImage: String
});

// define our registration model
// module.exports allows us to pass this to other files when it is called
module.exports = mongoose.model('PerformingUnit', performingUnitSchema);