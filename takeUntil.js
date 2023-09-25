const takeUntil = function(array, callback) {
  const result = [];
  for (let item of array) {

    result.push(item);
    if (callback(item)) {
      result.pop();
      break;

    }

  }
  return result;

}


function eqArrays(arr1, arr2) {
  if (arr1.length === 0 && arr2.length === 0) {
    return undefined; // Return undefined for empty arrays
  }
  return JSON.stringify(arr1) === JSON.stringify(arr2);
}

const assertEqual = function(actual, expected) {
  const result = eqArrays(actual, expected);
  if (result) {
    console.log("Array Matched");
  } else {
    console.log("Array does not match");
  }
};

//   const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
// const results1 = takeUntil(data1, x => x < 0);
// console.log(results1);



// const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
// //const results2 = takeUntil(data2, x => x === ',');
// //console.log(results2);
// assertEqual(takeUntil(data1, x => x < 0),[ 1, 2, 5, 7, 2 ]);
// console.log('---');
// assertEqual(takeUntil(data2, x => x === ','),[ "I've", 'been', 'to', 'Hollywood' ]);
// console.log('---');
// assertEqual(takeUntil(data2, x => x === ','),[ "I've", 'been', 'to', 'pollywood' ]);
module.exports = takeUntil;