const eqArrays = function(arr1, arr2) {

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};


const assertArraysEqual = function(arr1, arr2) {

  if (eqArrays(arr1, arr2) === true) {
    console.log(`😊😊😊 Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${arr1} !== ${arr2}`);
  }
};


const letterPositions = function(sentence) {

  let index = {};

  const string = sentence.toLowerCase();

  for (let i = 0; i < sentence.length; i++) {
    if (!string[i].match(/ /)) {
      if (!index[string[i]]) index[string[i]] = [];
      index[string[i]].push(i);
    }
  }
  console.log(index);
  return index;
};

assertArraysEqual(letterPositions("hello").e, [1]);
assertArraysEqual(letterPositions("hello").o, [4]);
assertArraysEqual(letterPositions("hello").l, [2, 3]);