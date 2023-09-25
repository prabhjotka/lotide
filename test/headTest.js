const assert = require('chai').assert;
const head = require('../head');
describe("#head", () => {
    it("returns 1 for [1, 2, 3]", () => {
        assert.strictEqual(head([1, 2, 3]), 1);
    });
    it("returns 1 for [1, 2, 3]", () => {
        assert.strictEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
    });
    it("returns 1 for [1, 2, 3]", () => {
        assert.strictEqual(head([]), undefined);
    });
    it("returns 1 for [1, 2, 3]", () => {
        assert.strictEqual(head([42]), 42);
    });
    it("returns 1 for [1, 2, 3]", () => {
        assert.strictEqual(
            head([null, undefined]), null);
    });
});
