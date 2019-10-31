var mongoose = require('mongoose')
var Schema = mongoose.Schema

var CompetitionSchema = new Schema({
  name: String,
  description: String,
  logo: String
})

module.exports = mongoose.model('Competition', CompetitionSchema)
