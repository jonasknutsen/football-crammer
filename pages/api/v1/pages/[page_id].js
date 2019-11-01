const mongoose = require('mongoose')
const config = require('../../../config/config')
mongoose.connect(config.database, { useNewUrlParser: true, useUnifiedTopology: true })

const Page = require('../../../models/Page')

export default function handle (req, res) {
  switch (req.method) {
    case 'GET':
      Page.findById(req.query.page_id, function (err, page) {
        if (err) {
          return res.status(200).json({ success: false, message: err })
        } else {
          return res.status(200).json({ success: true, message: 'Page found', page })
        }
      })
      break
    case 'PUT':
      Page.findByIdAndUpdate(req.query.page_id, { $set: req.body.update }, function (err, page) {
        if (err) {
          console.log(err)
          return res.status(200).json({ success: false, message: err })
        } else {
          return res.status(200).json({ success: true, message: 'Page updated', page })
        }
      })
      break
    case 'DELETE':
      Page.findByIdAndRemove(req.params.page_id, function (err, result) {
        if (err) {
          return res.status(200).json({ success: false, message: err })
        } else {
          return res.status(200).json({ success: true, message: 'Page deleted', result })
        }
      })
      break
    default:
      res.status(200).json({ success: false, message: 'Bad method' })
      break
  }
}
