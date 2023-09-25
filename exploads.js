const _ = require('./index');

const array = [1, 2, 3, 4, 5];

const firstElement = _.head(array);
const remainingElements = _.tail(array);
const middleElements = _.middle(array);

console.log(firstElement); // 1
console.log(remainingElements); // [2, 3, 4, 5]
console.log(middleElements); // [3]
