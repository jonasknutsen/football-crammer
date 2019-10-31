const mongoose = require('mongoose')
const config = require('../../../config/config')
mongoose.connect(config.database, { useNewUrlParser: true, useUnifiedTopology: true })

const Fixture = require('../../../models/Fixture')

export default function handle (req, res) {
  switch (req.method) {
    case 'GET':
      Fixture.findById(req.query.fixture_id, function (err, fixture) {
        if (err) {
          return res.status(200).json({ success: false, message: err })
        } else {
          return res.status(200).json({ success: true, message: 'Fixture found', fixture })
        }
      })
      break
    case 'PUT':
      Fixture.findByIdAndUpdate(req.query.fixture_id, { $set: req.body.update }, function (err, fixture) {
        if (err) {
          console.log(err)
          return res.status(200).json({ success: false, message: err })
        } else {
          return res.status(200).json({ success: true, message: 'Fixture updated', fixture })
        }
      })
      break
    case 'DELETE':
      Fixture.findByIdAndRemove(req.params.fixture_id, function (err, result) {
        if (err) {
          return res.status(200).json({ success: false, message: err })
        } else {
          return res.status(200).json({ success: true, message: 'Fixture deleted', result })
        }
      })
      break
    default:
      res.status(200).json({ success: false, message: 'Bad method' })
      break
  }
}
