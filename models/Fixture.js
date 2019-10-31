var mongoose = require('mongoose')
var Schema = mongoose.Schema

var FixtureSchema = new Schema({
  homeTeam: [{ type: Schema.Types.ObjectId, ref: 'Team' }],
  awayTeam: [{ type: Schema.Types.ObjectId, ref: 'Team' }],
  stadium: [{ type: Schema.Types.ObjectId, ref: 'Stadium' }],
  competition: [{ type: Schema.Types.ObjectId, ref: 'Competition' }],
  gamestart: Date
})

module.exports = mongoose.model('Fixture', FixtureSchema)
