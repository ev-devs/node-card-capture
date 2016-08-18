'use strict'

let exec = require('child_process').execSync

var cardCapture = function(callback) {
  var trackdata = exec('sudo python card-reader.py').toString('utf8')
  callback(trackdata)
}

cardCapture(function(data){
    console.log(data)
})

module.exports = cardCapture
