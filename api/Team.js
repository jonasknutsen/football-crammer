// Teams
const mongoose = require('mongoose')
const config = require('../config/config')
mongoose.connect(config.database, { useNewUrlParser: true })

var Team = require('../models/Team')

exports.getTeams = function (req, res) {
  Team.find({ active: true }, null, { sort: { timestamp: -1 } }, function (err, crators) {
    if (err) {
      return res.status(200).json({ success: false, message: err })
    } else {
      return res.status(200).json({ success: true, message: 'Teams found', crators })
    }
  })
}

exports.getTeam = function (req, res) {
  Team.findById(req.params.team_id, function (err, team) {
    if (err) {
      return res.status(200).json({ success: false, message: err })
    } else {
      return res.status(200).json({ success: true, message: 'Team found', team })
    }
  })
}

exports.updateTeam = function (req, res) {
  Team.findByIdAndUpdate(req.params.team_id, { $set: req.body.update }, function (err, team) {
    if (err) {
      console.log(err)
      return res.status(200).json({ success: false, message: err })
    } else {
      return res.status(200).json({ success: true, message: 'Team updated', team })
    }
  })
}

exports.deleteTeam = function (req, res) {
  Team.findByIdAndRemove(req.params.team_id, function (err, result) {
    if (err) {
      return res.status(200).json({ success: false, message: err })
    } else {
      return res.status(200).json({ success: true, message: 'Team deleted', result })
    }
  })
}

exports.addTeam = function (req, res) {
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
