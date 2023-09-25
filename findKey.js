
const findKey = (ob, callback) => {
    for (let i in ob) {

        if (callback(ob[i])) {
            return i;
        }


    }

}

// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
    if ((actual === expected)) {
        console.log('\u{1F604}', " Assertion Passed:", actual, "===", expected);
    } else {
        console.log(`'\u{1F624}',"Assertion Failed:",${actual},"!==",${expected}`);
    }
};

// assertEqual(findKey({
//     "Blue Hill": { stars: 1 },
//     "Akaleri":   { stars: 3 },
//     "noma":      { stars: 2 },
//     "elBulli":   { stars: 3 },
//     "Ora":       { stars: 2 },
//     "Akelarre":  { stars: 3 }
//   }, x => x.stars === 2),'noma'); // => "noma"
//   assertEqual(findKey({
//     "Blue Hill": { stars: 1 },
//     "Akaleri":   { stars: 3 },
//     "noma":      { stars: 2 },
//     "elBulli":   { stars: 3 },
//     "Ora":       { stars: 2 },
//     "Akelarre":  { stars: 3 }
//   }, x => x.stars === 5),'noma');
module.exports = findKey;