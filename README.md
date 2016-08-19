# Node Card Capture

This runs a node `child_process` that executes a python program which
listens in on a magtek card reader and returns the raw track data

### New

Added support for Synchronous and Asynchronous calls

# How to make it work

In order to make this work we need 3 things

* [MagTek Card Swiper](https://www.amazon.com/Magnetic-Stripe-Swipe-Card-Reader/dp/B001876VG6)
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
    var cardCapture       = require('./node-card-capture').cardCapture
    var cardCaptureSync   = require('./node-card-capture').cardCaptureSync

    // Synchronous call aka Stops everything until it's done
    var trackdata = cardCaptureSync()
    console.log(trackdata)

    // Asynchronous call aka will return when done and is non blocking
    cardCapture(function(trackdata){
        console.log(trackdata)
    })

```
