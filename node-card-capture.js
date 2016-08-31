'use strict'

let exec = require('child_process').exec
let execSync =  require('child_process').execSync

var cardCapture = function(callback) {

    exec('sudo python ' + __dirname + "/card-reader.py", function(err, stdout, stderr){
        if (err){
            console.log('there was an error running the python script, maybe try installing packages from README.md for node-card-capture')
            callback(err)
        }
        else {
            if (stderr) {
                callback ( "ERROR " + stderr)
            }
            else if (stdout) {
                callback (stdout)
            }
        }
    })
}

var cardCaptureSync = function() {
    return  execSync('sudo python ' + __dirname + '/card-reader.py').toString('utf8')
}

module.exports = { cardCapture, cardCaptureSync }
