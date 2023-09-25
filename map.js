const map = function (array, callback) {
  // empty for now :)
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }

  return results;
};

function eqArrays(arr1, arr2) {
  if (arr1.length === 0 && arr2.length === 0) {
    return undefined; // Return undefined for empty arrays
  }
  return JSON.stringify(arr1) === JSON.stringify(arr2);
}

const assertEqual = function (actual, expected) {
  const result = eqArrays(actual, expected);
  if (result) {
    console.log("Array Matched");
  } else {
    console.log("Array does not match");
  }
};

// const words = ["ground", "control", "to", "major", "tom"];
// const results1 = map(words, (word) => word[0]);
// console.log(results1);
// // assertEqual(
//   map(words, (word) => word[0]),
//   ["g", "c", "t", "m", "t"]
// );
// assertEqual(
//   map(words, (word) => word[1]),
//   ["r", "o", "o", "a", "o"]
// );
// assertEqual(
//   map(words, (word) => word[0]),
//   ["g", "c", "t", "m", "m"]
// );
 module.exports=map;