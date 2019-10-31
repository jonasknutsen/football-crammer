const mongoose = require('mongoose')
const config = require('../../../config/config')
mongoose.connect(config.database, { useNewUrlParser: true, useUnifiedTopology: true })

const Fixture = require('../../../models/Fixture')

export default function handle (req, res) {
  switch (req.method) {
    case 'GET':
      Fixture.find({ active: true }, null, { sort: { timestamp: -1 } }, function (err, fixtures) {
        if (err) {
          return res.status(200).json({ success: false, message: err })
        } else {
          return res.status(200).json({ success: true, message: 'Fixtures found', fixtures })
        }
      })
      break
    case 'POST': {
      const fixture = new Fixture()

      fixture.nane = req.body.name
      fixture.description = req.body.description
      fixture.heroImage = req.body.heroImage
      fixture.save(function (err, result) {
        if (err) {
          return res.status(200).json({ success: false, message: err })
        } else {
          return res.status(201).json({ success: true, message: 'Fixture added', result })
        }
      })
    }
      break
    default:
      res.status(200).json({ success: false, message: 'Bad method' })
      break
  }
}
