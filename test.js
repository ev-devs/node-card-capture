var cardCapture       = require('./node-card-capture').cardCapture
var cardCaptureSync   = require('./node-card-capture').cardCaptureSync

// Synchronous call aka Stops everything until it's done
var trackdata = cardCaptureSync()
console.log(trackdata)

// Asynchronous call aka will return when done and is non blocking
cardCapture(function(trackdata){
    console.log(trackdata)
})
