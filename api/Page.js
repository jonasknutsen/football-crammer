// Pages
const mongoose = require('mongoose')
const config = require('../config/config')
mongoose.connect(config.database, { useNewUrlParser: true })

var Page = require('../models/Page')

exports.getPages = function (req, res) {
  Page.find({ active: true }, null, { sort: { timestamp: -1 } }, function (err, crators) {
    if (err) {
      return res.status(200).json({ success: false, message: err })
    } else {
      return res.status(200).json({ success: true, message: 'Pages found', crators })
    }
  })
}

exports.getPage = function (req, res) {
  Page.findById(req.params.page_id, function (err, page) {
    if (err) {
      return res.status(200).json({ success: false, message: err })
    } else {
      return res.status(200).json({ success: true, message: 'Page found', page })
    }
  })
}

exports.updatePage = function (req, res) {
  Page.findByIdAndUpdate(req.params.page_id, { $set: req.body.update }, function (err, page) {
    if (err) {
      console.log(err)
      return res.status(200).json({ success: false, message: err })
    } else {
      return res.status(200).json({ success: true, message: 'Page updated', page })
    }
  })
}

exports.deletePage = function (req, res) {
  Page.findByIdAndRemove(req.params.page_id, function (err, result) {
    if (err) {
      return res.status(200).json({ success: false, message: err })
    } else {
      return res.status(200).json({ success: true, message: 'Page deleted', result })
    }
  })
}

exports.addPage = function (req, res) {
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
