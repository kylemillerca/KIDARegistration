/**
 * Created by ksmiller on 4/23/2015.
 */
var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var judgingPanelSchema = new Schema({
    percMusic: String,
    percGeArtistry: String,
    percVisual: String,
    percTAndP: String,
    percTabulator: String,
    percDigitalTech: String,
    guardMovement: String,
    guardEquipment: String,
    guardDesign: String,
    guardGE1: String,
    guardGE2: String,
    guardTandP: String,
    guardTabulator: String,
    guardDigitalTech: String,
    chiefJudge: String
});

// define our registration model
// module.exports allows us to pass this to other files when it is called
module.exports = mongoose.model('JudgingPanel', judgingPanelSchema);