// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
    if ((actual  === expected)) {
        console.log('\u{1F604}'," Assertion Passed:",actual,"===",expected);
    } else {
        console.log('\u{1F624}',"Assertion Failed:",actual,"!==",expected);
    }
};

// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);