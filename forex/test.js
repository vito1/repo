'use strict';
let allimports = require('./trader.js');
const assert = require('assert')


//output high 30 and timeframe 16 for last element 
//assert.deepEqual(allimports.findMaxAndTimeFrame(allimports.data.set, 41), [30, 16])
//
console.log(allimports.findTrades())
 