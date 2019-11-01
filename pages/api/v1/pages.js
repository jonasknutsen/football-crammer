const mongoose = require('mongoose')
const config = require('../../../config/config')
mongoose.connect(config.database, { useNewUrlParser: true, useUnifiedTopology: true })

const Page = require('../../../models/Page')

export default function handle (req, res) {
  switch (req.method) {
    case 'GET':
      Page.find({ active: true }, null, { sort: { timestamp: -1 } }, function (err, pages) {
        if (err) {
          return res.status(200).json({ success: false, message: err })
        } else {
          return res.status(200).json({ success: true, message: 'Pages found', pages })
        }
      })
      break
    case 'POST': {
      const page = new Page()

      page.nane = req.body.name
      page.description = req.body.description
      page.heroImage = req.body.heroImage
      page.save(function (err, result) {
        if (err) {
          return res.status(200).json({ success: false, message: err })
        } else {
          return res.status(201).json({ success: true, message: 'Page added', result })
        }
      })
    }
      break
    default:
      res.status(200).json({ success: false, message: 'Bad method' })
      break
  }
}
