const assertEqual = require('./assertEqual');
// Define the head function

const head = function(arr) {
  if (arr.length === 0) {
    return undefined; // Return undefined for empty arrays
  }
  return arr[0];
  
};



module.exports = head;