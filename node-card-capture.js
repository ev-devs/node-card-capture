'use strict'

let exec = require('child_process').execSync

nodeCardCapture = function() {
  return exec('sudo pythin card-reader.py').toString('utf8')
}

module.exports = nodeCardCapture
