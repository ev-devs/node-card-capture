# Node Card Capture

This runs a node `child_process` that executes a python program which
listens in on a magtek card reader and returns the raw track data

### New

Added support for Synchronous and Asynchronous calls

# How to make it work

In order to make this work we need 3 things

* MagTek Card Reader
* at least Python 2.7 installed with python libraries installed as well
* this npm package

# Installation
```bash
  $ sudo apt-get install libusb-1.0-0   
  $ sudo -H pip install pyusb --pre --upgrade   
  $ npm install node-card-capture   
```

# Usage

```javascript
  var cardCapture       = require('node-card-capture').cardCapture
  var cardCaptureSync   = require('node-card-capture').cardCaptureSync

  // Synchronous call aka Stops everything until it's done
  var trackdata = cardCaptureSync()


  // Asynchronous call aka will return when done and is non blocking
  cardCapture(function(trackdata){
      console.log(trackdata)
  })
```
