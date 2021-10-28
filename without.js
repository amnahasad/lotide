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

assertArraysEqual([1, 2, 3], [1, 2, 3]); //This should PASS
assertArraysEqual([1, 2, 3], [1, 2, 5]); //This should FAIL
assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]); //This should PASS
assertArraysEqual(["1", "2", "3"], ["1", "2", 3]); //This should FAIL

const without = function(source, itemsToRemove) {

  const newArray = [];

  for (let i = 0; i < source.length; i++) {
    let itemsToKeep = true;
    for (let j = 0; j < itemsToRemove.length; j++) {
      if (source[i] === itemsToRemove[i]) {
        itemsToKeep = false;
        break;
      }
    }
    if (itemsToKeep) {
      newArray.push(source[i]);
    }
  }
  return newArray;
};

assertArraysEqual(without([1, 2, 3], [1]), [2, 3]); // => [2, 3]
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]); // => ["1", "2"]
assertArraysEqual(without(["1", "2", "3"], []), ["1", "2", "3"]); // => ["1", "2"]
assertArraysEqual(without([], [1, 2]), []); // => ["1", "2"]

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);
