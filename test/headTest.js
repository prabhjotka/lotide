const assertEqual = require('../assertEqual');
const head = require('../head');

//Test cases

assertEqual(head([5, 6, 7]), 5);
// Should pass
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello"); // Should pass

// // Additional test cases

assertEqual(head([]), undefined); // Should pass for empty array
assertEqual(head([42]), 42); // Should pass for a single-element array
assertEqual(head([null, undefined]), null); // Should pass for null as the first element


  