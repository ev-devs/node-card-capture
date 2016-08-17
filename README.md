# Node Card Capture

This runs a python `child_process`

# Installation

  $ sudo apt-get install libusb-1.0-0
  $ sudo -H pip install pyusb --pre --upgrade
  $ npm install node-card-capture

# Usage

```
  var cardCapture = require('node-card-capture')

  cardCapture(function(trackdata){
      console.log(trackdata)
  })
```
