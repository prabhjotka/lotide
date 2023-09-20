// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
function eqArrays(arr1, arr2) {
  return JSON.stringify(arr1) === JSON.stringify(arr2);
}
const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log("\u{1F604}", " Assertion Passed:", actual, "===", expected);
  } else {
    console.log(`'\u{1F624}',"Assertion Failed:",${actual},"!==",${expected}`);
  }
};

const eqObjects = function (object1, object2) {
  const obj1 = Object.keys(object1);
  const obj2 = Object.keys(object2);

  if (obj1.length !== obj2.length) {
    return false;
  }
  for (let obj in object1) {
    if (Array.isArray(object1[obj]) && Array.isArray(object2[obj])) {
      return eqArrays(object1[obj], object2[obj]);
    } else if (object1[obj] !== object2[obj]) {
      return false;
    }
  }

  return true;
};

const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
const anotherMultiColorShirtObject = {
  size: "medium",
  colors: ["red", "blue"],
};
//eqObjects(multiColorShirtObject  , anotherMultiColorShirtObject); // => true

const longSleeveMultiColorShirtObject = {
  size: "medium",
  colors: ["red", "blue"],
  sleeveLength: "long",
};

assertEqual(
  eqObjects(multiColorShirtObject, anotherMultiColorShirtObject),
  true
);

assertEqual(eqObjects(multiColorShirtObject, longSleeveMultiColorShirtObject));
// => false

//const shirtObject = { color: "red", size: "medium" };
// const anotherShirtObject= { size: "medium", color: "red" };
// console.log(eqObjects(shirtObject , anotherShirtObject)); // => true

// const longSleeveShirtObject= { size: "medium", color: "red", sleeveLength: "long" };
// console.log(eqObjects(shirtObject , longSleeveShirtObject)); // => false
