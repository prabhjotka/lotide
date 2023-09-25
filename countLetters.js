
const  countLetters=function(str)
{
    const results={};
    for (let item of str)
    {
        
            if (results[item]) {
              results[item] += 1;
            } else {
              results[item] = 1;
            }
          
    }
return results;
}


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
        console.log("Assertion Matched")
    }
else{

    console.log("Asserntion does not match");
}
   
};

// let result=countLetters("LHLL");
// console.log(result);
// assertEqual(result, { L: 3, H: 1 });
// assertEqual(countLetters("pip"),{p:2,i:2});

module.exports = countLetters;