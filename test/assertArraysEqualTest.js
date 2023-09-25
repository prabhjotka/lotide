const eqArrays = require('../eqArrays');
const assertArraysEqual = require('../assertArraysEqual');
assertArraysEqual([1, 2, 3], [1, 2, 8]);
assertArraysEqual([1, 2, 3], [1, 2, 3]);