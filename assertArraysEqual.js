const eqArrays = require('./eqArrays');


  const assertArraysEqual = function(actual, expected) {
    const result=eqArrays(actual,expected);
    if(result)
    {
        console.log("Array Matched")
    }
else{

    console.log("Array does not match");
}
   
};
module.exports = assertArraysEqual;
