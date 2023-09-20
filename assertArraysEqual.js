function eqArrays(arr1,arr2) {
    if (arr1.length === 0 && arr2.length===0) {
      return undefined; // Return undefined for empty arrays
    }
    return JSON.stringify(arr1) === JSON.stringify(arr2);
   
  }

  const assertEqual = function(actual, expected) {
    const result=eqArrays(actual,expected);
    if(result)
    {
        console.log("Array Matched")
    }
else{

    console.log("Array does not match");
}
   
};
assertEqual([1, 2, 3], [1, 2, 8]);
assertEqual([1, 2, 3], [1, 2, 3]);
