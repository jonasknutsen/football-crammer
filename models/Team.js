var mongoose = require('mongoose')
var Schema = mongoose.Schema

var TeamSchema = new Schema({
  name: String,
  description: String,
  stadium: [{ type: Schema.Types.ObjectId, ref: 'Stadium' }],
  logo: String
})

module.exports = mongoose.model('Team', TeamSchema)
