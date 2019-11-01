const mongoose = require('mongoose')
const config = require('../../../config/config')
mongoose.connect(config.database, { useNewUrlParser: true, useUnifiedTopology: true })

const Team = require('../../../models/Team')

export default function handle (req, res) {
  switch (req.method) {
    case 'GET':
      Team.findById(req.query.team_id, function (err, team) {
        if (err) {
          return res.status(200).json({ success: false, message: err })
        } else {
          return res.status(200).json({ success: true, message: 'Team found', team })
        }
      })
      break
    case 'PUT':
      Team.findByIdAndUpdate(req.query.team_id, { $set: req.body.update }, function (err, team) {
        if (err) {
          console.log(err)
          return res.status(200).json({ success: false, message: err })
        } else {
          return res.status(200).json({ success: true, message: 'Team updated', team })
        }
      })
      break
    case 'DELETE':
      Team.findByIdAndRemove(req.params.team_id, function (err, result) {
        if (err) {
          return res.status(200).json({ success: false, message: err })
        } else {
          return res.status(200).json({ success: true, message: 'Team deleted', result })
        }
      })
      break
    default:
      res.status(200).json({ success: false, message: 'Bad method' })
      break
  }
}
