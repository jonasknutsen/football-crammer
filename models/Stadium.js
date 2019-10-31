var mongoose = require('mongoose')
var Schema = mongoose.Schema

var StadiumSchema = new Schema({
  name: String,
  description: String,
  address: String,
  city: String,
  loation: String
})

module.exports = mongoose.model('Stadium', StadiumSchema)
