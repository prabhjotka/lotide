// FUNCTION IMPLEMENTATION

function tail(arr)
{
    if (arr.length === 0) {
        return undefined; // Return undefined for empty arrays
      }
      return arr.slice(1,arr.length);
    }


const assertEqual = function(actual, expected) {
    if ((actual  === expected)) {
        console.log('\u{1F604}'," Assertion Passed:",actual,"===",expected);
    } else {
        console.log(`'\u{1F624}',"Assertion Failed:",${actual},"!==",${expected}`);
    }
};

// TEST CODE
//const result = tail(["Hello", "Lighthouse", "Labs"]);
// assertEqual(result, ["Lighthouse", "Labs"]); 
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!
