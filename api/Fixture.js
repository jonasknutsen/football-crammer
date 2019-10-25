// Fixtures
const mongoose = require('mongoose')
const config = require('../config/config')
mongoose.connect(config.database, { useNewUrlParser: true })

var Fixture = require('../models/Fixture')

exports.getFixtures = function (req, res) {
  Fixture.find({ active: true }, null, { sort: { timestamp: -1 } }, function (err, fixtures) {
    if (err) {
      return res.status(200).json({ success: false, message: err })
    } else {
      return res.status(200).json({ success: true, message: 'Fixtures found', fixtures })
    }
  })
}

exports.getFixture = function (req, res) {
  Fixture.findById(req.params.fixture_id, function (err, fixture) {
    if (err) {
      return res.status(200).json({ success: false, message: err })
    } else {
      return res.status(200).json({ success: true, message: 'Fixture found', fixture })
    }
  })
}

exports.updateFixture = function (req, res) {
  Fixture.findByIdAndUpdate(req.params.fixture_id, { $set: req.body.update }, function (err, fixture) {
    if (err) {
      console.log(err)
      return res.status(200).json({ success: false, message: err })
    } else {
      return res.status(200).json({ success: true, message: 'Fixture updated', fixture })
    }
  })
}

exports.deleteFixture = function (req, res) {
  Fixture.findByIdAndRemove(req.params.fixture_id, function (err, result) {
    if (err) {
      return res.status(200).json({ success: false, message: err })
    } else {
      return res.status(200).json({ success: true, message: 'Fixture deleted', result })
    }
  })
}

exports.addFixture = function (req, res) {
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
