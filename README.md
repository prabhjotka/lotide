# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs.

## Usage

**Install it:**

`npm install @prabhmann/lotide`

**Require it:**

`const _ = require('@prabhmann/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

- `function1(...)`: description
- `function2(...)`: description
- `function3(...)`: description
  head(array):returns first element

  tail(array):returns elements exceptthe  first  1st element

  middle(array):returns middle element. if number of elements is even returns middle 2
  elements, if number of elements is odd returns middle 1 element,if number of elements are 1 either 2 returns empty array.

  countLetters(string value):return a particular letter in string occured how many times.

  countOnly(allItems, itemsToCount)count a particular item value will appear how many time in array of objects.get array of objects and value to be count.

  findKey(object ,callback):find a key in object.

  findKeyByValue(object,value):find a key by value passed as parameter.

  letterPositions(sentence):get sentence and letter need to check position .passed as parameter sentence.letter and gives letter position.

  map(array,callback):map over array. call back functuion gives a specified letter in array.

  takeUntil(array,callback):push value to new array until particular pattern occurs in given array.

  without(array,itemtoberemoved):remove a specified item but not from original array.
 