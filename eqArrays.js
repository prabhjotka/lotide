const assertEqual = require('./assertEqual');
const  eqArrays=function(arr1, arr2) {
  if (arr1.length === 0 && arr2.length === 0) {
    return undefined; // Return undefined for empty arrays
  }
  return JSON.stringify(arr1) === JSON.stringify(arr2);
}
// FUNCTION IMPLEMENTATION

module.exports = eqArrays;
