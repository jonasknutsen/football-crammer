const mongoose = require('mongoose')
const config = require('../../../config/config')
mongoose.connect(config.database, { useNewUrlParser: true, useUnifiedTopology: true })

const Stadium = require('../../../models/Stadium')

export default function handle (req, res) {
  switch (req.method) {
    case 'GET':
      Stadium.findById(req.query.stadium_id, function (err, stadium) {
        if (err) {
          return res.status(200).json({ success: false, message: err })
        } else {
          return res.status(200).json({ success: true, message: 'Stadium found', stadium })
        }
      })
      break
    case 'PUT':
      Stadium.findByIdAndUpdate(req.query.stadium_id, { $set: req.body.update }, function (err, stadium) {
        if (err) {
          console.log(err)
          return res.status(200).json({ success: false, message: err })
        } else {
          return res.status(200).json({ success: true, message: 'Stadium updated', stadium })
        }
      })
      break
    case 'DELETE':
      Stadium.findByIdAndRemove(req.params.stadium_id, function (err, result) {
        if (err) {
          return res.status(200).json({ success: false, message: err })
        } else {
          return res.status(200).json({ success: true, message: 'Stadium deleted', result })
        }
      })
      break
    default:
      res.status(200).json({ success: false, message: 'Bad method' })
      break
  }
}
