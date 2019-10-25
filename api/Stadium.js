// Stadiums
const mongoose = require('mongoose')
const config = require('../config/config')
mongoose.connect(config.database, { useNewUrlParser: true })

var Stadium = require('../models/Stadium')

exports.getStadiums = function (req, res) {
  Stadium.find({ active: true }, null, { sort: { timestamp: -1 } }, function (err, crators) {
    if (err) {
      return res.status(200).json({ success: false, message: err })
    } else {
      return res.status(200).json({ success: true, message: 'Stadiums found', crators })
    }
  })
}

exports.getStadium = function (req, res) {
  Stadium.findById(req.params.stadium_id, function (err, stadium) {
    if (err) {
      return res.status(200).json({ success: false, message: err })
    } else {
      return res.status(200).json({ success: true, message: 'Stadium found', stadium })
    }
  })
}

exports.updateStadium = function (req, res) {
  Stadium.findByIdAndUpdate(req.params.stadium_id, { $set: req.body.update }, function (err, stadium) {
    if (err) {
      console.log(err)
      return res.status(200).json({ success: false, message: err })
    } else {
      return res.status(200).json({ success: true, message: 'Stadium updated', stadium })
    }
  })
}

exports.deleteStadium = function (req, res) {
  Stadium.findByIdAndRemove(req.params.stadium_id, function (err, result) {
    if (err) {
      return res.status(200).json({ success: false, message: err })
    } else {
      return res.status(200).json({ success: true, message: 'Stadium deleted', result })
    }
  })
}

exports.addStadium = function (req, res) {
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
