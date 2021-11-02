# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @amnah/lotide`

**Require it:**

`const _ = require('@amnah/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head(array)`: Returns the first value of an array
* `tail(array)`: Returns all the values of an array after the first value
* `middle(array)`: Returns the middle value of an array
* `without(source, itemsToRemove)`: Returns a subset of an array, removing the unwanted elements
* `takeUntil(array, callback)`: Will keep collecting items from a provided array until the callback provided returns a truthy value
* `map(array, callback)`: Returns a new array based on the results of the callback function
* `letterPositions(sentence)`: Returns all the indices (zero-based positions) in the string where each character is found
* `findKey(object, callback)`: Takes in an object and a callback. It should scan the object and return the first key for which the callback returns a truthy value. If no key is found, then it should return undefined
* `findKeyByValue(obj, value)`: Takes an object and a value. It should scan the object and return the first key which contains the given value. If no key with that given value is found, then it should return undefined
* `eqObjects(object1, object2)`: Takes in two objects and returns true or false, based on a perfect match
* `eqArrays(array1, array2)`: Takes in two arrays and returns true or false, based on a perfect match
* `countOnly(allItems, itemsToCount)`: Returns a proper report (an object) on all the strings found in the input array, and their respective counts
* `countLetters(sentence)`: Takes a sentence (as a string) and then returns a count of each of the letters in that sentence
* `assertObjectsEqual(actual, expected)`: Takes in two objects and console.logs an appropriate message to the console
* `assertArraysEqual(array1, array2)`: Takes in two arrays and console.logs an appropriate message to the console
* `assertEqual(actual, expected)`: Prints to the console, when an expected outcome fails