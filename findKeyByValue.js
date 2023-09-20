
const findKeyByValue=function(objects,valueofObj)
{    
    for(let item in objects)
    {

    
        if(objects[item]===valueofObj)
        {
            return item;
        }
    }

};
const assertEqual = function(actual, expected) {
    if ((actual  === expected)) {
        console.log('\u{1F604}'," Assertion Passed:",actual,"===",expected);
    } else {
        console.log(`'\u{1F624}',"Assertion Failed:",${actual},"!==",${expected}`);
    }
};

const bestTVShowsByGenre = { 
    sci_fi: "The Expanse",
    comedy: "Brooklyn Nine-Nine",
    drama:  "The Wire"
  };
  
  //console.log(findKeyByValue(bestTVShowsByGenre, "The Wire"));
  assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
  assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);