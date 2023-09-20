const eqObjects = function (object1, object2) {
  const obj1 = Object.keys(object1);
  const obj2 = Object.keys(object2);

  if (obj1.length !== obj2.length) {
    return false;
  }
  for (let obj in object1) {
    if (object1[obj] !== object2[obj]) {
      return false;
    }
  }

  return true;
};

const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log("\u{1F604}", " Assertion Passed:", actual, "===", expected);
  } else {
    console.log(`'\u{1F624}',"Assertion Failed:",${actual},"!==",${expected}`);
  }
};

// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function (actual, expected) {
  // Implement me!
  const inspect = require("util").inspect;
  console.log(`Example label: ${inspect(actual)}`);

  return eqObjects(actual, expected);
}; //console.log(assertObjectsEqual({ a: "6", b: 2 }, { a: "1", b: 2 }));
assertEqual(assertObjectsEqual({ a: "1", b: 2 }, { a: "1", b: 2 }), true);
assertEqual(assertObjectsEqual({ a: "1", b: 4 }, { a: "1", b: 2 }), false);
assertEqual(assertObjectsEqual({ a: "1", b: 2 }, { a: "1", b: 2 }), false);
