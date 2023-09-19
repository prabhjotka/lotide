// Define the head function
function head(arr) {
    if (arr.length === 0) {
      return undefined; // Return undefined for empty arrays
    }
    return arr[0];
  }
  
  // Define an assertEqual function to check if two values are equal
    // FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
    if ((actual  === expected)) {
        console.log('\u{1F604}'," Assertion Passed:",actual,"===",expected);
    } else {
        console.log(`'\u{1F624}',"Assertion Failed:",${actual},"!==",${expected}`);
    }
};
  // Test cases
  assertEqual(head([5, 6, 7]), 5); // Should pass
  assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello"); // Should pass
  
  // Additional test cases
  assertEqual(head([]), undefined); // Should pass for empty array
  assertEqual(head([42]), 42); // Should pass for a single-element array
  assertEqual(head([null, undefined]), null); // Should pass for null as the first element
  
