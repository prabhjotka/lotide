// FUNCTION IMPLEMENTATION
const assertEqual = require('./assertEqual');
const  tail=function(arr)
{
    if (arr.length === 0) {
        return undefined; // Return undefined for empty arrays
      }
      return arr.slice(1,arr.length);
    

};


module.exports = tail;
