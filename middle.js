function eqArrays(arr1, arr2) {
    
    return JSON.stringify(arr1) === JSON.stringify(arr2);
  }
  const assertArraysEqual = function (actual, expected) {
   console.log("Array mid value returned ",actual);
   console.log("Expected value",expected);
    const result = eqArrays(actual, expected);
  
    if (result) {
      console.log("Array values  Matched");
    } else {
      console.log("Array does not match");
    }
  };
  const middle = function(arr) {
    const len=arr.length;
    if (!len)
    return;
     if(len===1 || len===2)
     {
return  arr=[];
     }
  
  const mid = len / 2;
  if (len % 2 === 1) {
    return [arr[Math.floor(mid)]];
  } else {
    return [
      arr[mid - 1],
      arr[mid],
    ];
  }
  }


 assertArraysEqual(middle([1, 2, 3]),[2]) // => [2]
assertArraysEqual(middle([1, 2, 3, 4, 5]),[3]); // => [3]
assertArraysEqual(middle([1, 2, 3, 4]),[2,3]); // => [2, 3]
assertArraysEqual(middle([1]),[]); // => []
assertArraysEqual(middle([1, 2]),[]); // => []