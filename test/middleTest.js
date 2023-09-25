
const assert = require('chai').assert;
const middle = require('../middle');
describe("#middle", () => {
    it("returns 3 for [1, 2, 3,4,5]", () => {
        assert.deepEqual(middle([1, 2, 3,4,5]), [3]);
    });
    it("returns 2,3 for [1, 2, 3,4]", () => {
        assert.deepEqual(middle([1, 2, 3,4,5,6]), [3,4]);
    });
    it("returns [] for [1]", () => {
        assert.deepEqual(middle([1]), []);
    });
    it("returns [] for [1,2]", () => {
        assert.deepEqual(middle([1,2]), []);
    });
});



// const assertArraysEqual = require('../assertArraysEqual');



// assertArraysEqual(middle([1, 2, 3, 4, 5]),[3]); // => [3]
// assertArraysEqual(middle([1, 2, 3, 4]),[2,3]); // => [2, 3]
// assertArraysEqual(middle([1]),[]); // => []
// assertArraysEqual(middle([1, 2]),[]); // => []