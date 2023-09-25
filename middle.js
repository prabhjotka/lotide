const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');

const middle = function(arr) {
  const len = arr.length;
  if (!len)
    return;
  if (len === 1 || len === 2) {
    return arr = [];
  }

  const mid = len / 2;
  if (len % 2 === 1) {
    return [arr[Math.floor(mid)]];
  } else {
    return [
      arr[mid - 1],
      arr[mid],
    ];
  }
};




module.exports = middle;
