'use strict';
const Decoder = require('../index.js');

// Numeric data
const data1 = Decoder.decode('a421a601b051fd0053426027');
console.log(data1); // { hmd: 42.2, tmp: 25.3, prs: 1008 }

// Text data
const data2 = Decoder.decode('8013e569a0138c15c013f929', ['d1', 'd2', 'd3']);
console.log(data2); // { d1: 'zoe', d2: 'ell', d3: 'joy' }