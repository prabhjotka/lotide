const without = function (source, itemsToRemove) {
  return source.filter(function (item) {
    return item != itemsToRemove;
  });
};
function eqArrays(arr1, arr2) {
  if (arr1.length === 0 && arr2.length === 0) {
    return undefined; // Return undefined for empty arrays
  }
  return JSON.stringify(arr1) === JSON.stringify(arr2);
}
const assertArraysEqual = function (actual, expected) {
  console.log("Array before deletion", expected);
  console.log("Array after deletion", actual);
  const result = eqArrays(actual, expected);

  if (result) {
    console.log("Array Matched");
  } else {
    console.log("Array does not match");
  }
};

const words = ["hello", "world", "lighthouse"];
//without(words, ["lighthouse"]); // no need to capture return value for this test case
// // Make sure the original array was not altered by the without function

assertArraysEqual(without(words, ["lighthouse"]), [
  "hello",
  "world",
  "lighthouse",
]);

assertArraysEqual(without([1, 2, 3], [1]), [2, 3]);
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);
