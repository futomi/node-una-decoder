node-una-decoder
===============

The node-una-decoder is a Node.js module which allows you to decode a structured message data sent by a [UnaBiz Arduino library](https://github.com/UnaBiz/unabiz-arduino) for [UnaShield](https://unabiz.github.io/unashield/) which is a SIGFOX transceiver module for Arduino.

## Dependencies

* [Node.js](https://nodejs.org/en/) 4 +
  * Though this module works on Node 4 for now, it is strongly recommended to use Node 6 or newer. this module will not support Node 4 in the future.

---------------------------------------
## Table of Contents

* [Installation](#Installation)
* [Usage](#Usage)
* [Release Note](#Release-Note)
* [References](#References)
* [License](#License)

---------------------------------------
## <a id="Installation">Installation</a>

```
$ cd ~
$ npm install node-una-decoder
```

---------------------------------------
## <a id="Usage">Usage</a>

```JavaScript
const Decoder = require('node-una-decoder');

// Numeric data
const data1 = Decoder.decode('a421a601b051fd0053426027');
console.log(data1); // { hmd: 42.2, tmp: 25.3, prs: 1008 }

// Text data
const data2 = Decoder.decode('8013e569a0138c15c013f929', ['d1', 'd2', 'd3']);
console.log(data2); // { d1: 'zoe', d2: 'ell', d3: 'joy' }
```

That's it.

If the structured message data contains only numeric data, pass a hexadecimal string to the `decode()` method. The method will decode it to a hash object. If the structured message data contains text data, pass an `Array` object to the `decode()` method as the 2nd argument. The `Array` object must contain the names representing text data.

---------------------------------------
## <a id="Release-Note">Release Note</a>

* v0.0.1 (2018-03-14)
  * First public release

---------------------------------------
## <a id="References">References</a>

* [UnaBiz](https://www.unabiz.com/)
* [UnaBiz Arduino library for connecting UnaShield to SIGFOX network](https://github.com/UnaBiz/unabiz-arduino)
* [UnaShield Developer Guide](https://unabiz.github.io/unashield/)
* [UnaShield Hardware Guide](https://unabiz.github.io/unashield/hardware.html)
* [UnaBiz - structuredMessage.js](https://github.com/UnaBiz/sigfox-gcloud/blob/master/decodeStructuredMessage/structuredMessage.js)

---------------------------------------
## <a id="License">License</a>

The MIT License (MIT)

Copyright (c) 2018 Futomi Hatano

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
