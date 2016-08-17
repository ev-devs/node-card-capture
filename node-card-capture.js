'use strict'

let exec = require('child_process').execSync

var trackdata = exec('sudo python card-reader.py')

console.log(trackdata.toString('utf8'))
