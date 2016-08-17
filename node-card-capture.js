'use strict'

let exec = require('child_process').execSync

CardCapture = function(callback) {
  var trackdata = exec('sudo python card-reader.py').toString('utf8')
  callback(trackdata)
}

module.exports = CardCapture
