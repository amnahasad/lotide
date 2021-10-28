const eqArrays = function(arr1, arr2) {

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};


// assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
// assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true); // => should PASS
// assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false); //should FAIL
// assertEqual(eqArrays([1, 2, 3], [1, 2, 6]), false); // => should FAIL

const assertArraysEqual = function(arr1, arr2) {

  if (eqArrays(arr1, arr2) === true) {
    console.log(`😊😊😊 Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${arr1} !== ${arr2}`);
  }
};

assertArraysEqual([1, 2, 3], [1, 2, 3]); //This should PASS
assertArraysEqual([1, 2, 3], [1, 2, 5]); //This should FAIL
assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]); //This should PASS
assertArraysEqual(["1", "2", "3"], ["1", "2", 3]); //This should FAIL