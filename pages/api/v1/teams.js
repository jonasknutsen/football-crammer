const mongoose = require('mongoose')
const config = require('../../../config/config')
mongoose.connect(config.database, { useNewUrlParser: true, useUnifiedTopology: true })

const Team = require('../../../models/Team')

export default function handle (req, res) {
  switch (req.method) {
    case 'GET':
      Team.find({ active: true }, null, { sort: { timestamp: -1 } }, function (err, teams) {
        if (err) {
          return res.status(200).json({ success: false, message: err })
        } else {
          return res.status(200).json({ success: true, message: 'Teams found', teams })
        }
      })
      break
    case 'POST': {
      const team = new Team()

      team.nane = req.body.name
      team.description = req.body.description
      team.heroImage = req.body.heroImage
      team.save(function (err, result) {
        if (err) {
          return res.status(200).json({ success: false, message: err })
        } else {
          return res.status(201).json({ success: true, message: 'Team added', result })
        }
      })
    }
      break
    default:
      res.status(200).json({ success: false, message: 'Bad method' })
      break
  }
}
