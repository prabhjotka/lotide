const letterPositions = function(sentence) {
  let results = {};
  // logic to update results here

  for (let i in sentence) {
    const letter = sentence[i];

    if (!results[letter]) {
      results[letter] = [i];
    } else {
      results[letter].push(i);
    }
  }

  return results;
};

function eqArrays(arr1, arr2) {
  let numArr = arr1.map(Number);
  return JSON.stringify(numArr) == JSON.stringify(arr2);

}

const assertArraysEqual = function(actual, expected) {
  const result = eqArrays(actual, expected);

  if (result) {
    console.log("Assertion Matched");
  } else {
    console.log("Asserntion does not match");
  }
};

// //assertArraysEqual(letterPositions("hello").e, [1]);
//console.log(letterPositions("hello").o);
// assertArraysEqual(letterPositions("hello").l, [2,3]);
module.exports = letterPositions;