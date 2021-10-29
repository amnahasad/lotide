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

const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {

  const results = [];

  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

map(words, word => {
  return word;
});

const results1 = map(words, word => word[0]);
console.log(results1);

assertArraysEqual(["ground", "control", "to", "major", "tom"], ["ground", "control", "to", "major", "tom"]); //This should PASS
assertArraysEqual(["ground", "control", "to", "major", "tom"], ["ground", "control", "to"]); //This should FAIL
assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]); //This should PASS
assertArraysEqual(["1", "2", "3"], ["1", "24", "3"]); //This should FAIL
assertArraysEqual([], []); //This should PASS