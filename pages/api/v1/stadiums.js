const mongoose = require('mongoose')
const config = require('../../../config/config')
mongoose.connect(config.database, { useNewUrlParser: true, useUnifiedTopology: true })

const Stadium = require('../../../models/Stadium')

export default function handle (req, res) {
  switch (req.method) {
    case 'GET':
      Stadium.find({ active: true }, null, { sort: { timestamp: -1 } }, function (err, stadiums) {
        if (err) {
          return res.status(200).json({ success: false, message: err })
        } else {
          return res.status(200).json({ success: true, message: 'Stadiums found', stadiums })
        }
      })
      break
    case 'POST': {
      const stadium = new Stadium()

      stadium.nane = req.body.name
      stadium.description = req.body.description
      stadium.heroImage = req.body.heroImage
      stadium.save(function (err, result) {
        if (err) {
          return res.status(200).json({ success: false, message: err })
        } else {
          return res.status(201).json({ success: true, message: 'Stadium added', result })
        }
      })
    }
      break
    default:
      res.status(200).json({ success: false, message: 'Bad method' })
      break
  }
}
