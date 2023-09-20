function eqArrays(arr1,arr2) {
    if (arr1.length === 0 && arr2.length===0) {
      return undefined; // Return undefined for empty arrays
    }
    return JSON.stringify(arr1) === JSON.stringify(arr2);
   
  }
// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
    if ((actual  === expected)) {
        console.log('\u{1F604}'," Assertion Passed:",actual,"===",expected);
    } else {
        console.log(`'\u{1F624}',"Assertion Failed:",${actual},"!==",${expected}`);
    }
};

// TEST CODE
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true)