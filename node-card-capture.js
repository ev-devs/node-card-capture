'use strict'

let exec = require('child_process').execelect

var cardCapture = function(callback) {
    console.log('The process is happeing in ' + __dirname)
    var trackdata = exec('sudo python ' + __dirname + '/card-reader.py').toString('utf8')
    callback(trackdata)
}

module.exports = cardCapture
