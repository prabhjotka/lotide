const eqObjects = function (object1, object2) {
    const obj1 = Object.keys(object1);
    const obj2 = Object.keys(object2);
  
    if (obj1.length !== obj2.length) {
      return false;
    }
    for (let obj in object1) {
      if (Array.isArray(object1[obj]) && Array.isArray(object2[obj])) {
        console.log(eqArrays(object1[obj], object2[obj]));
      } else if (object1[obj] !== object2[obj]) {
        return false;
      }
    }
  
    return true;
  };
  // FUNCTION IMPLEMENTATION
const assertObjectsEqual = function(actual, expected) {
    // Implement me!
    
  };