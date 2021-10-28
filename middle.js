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

const middle = function(arr) {

  let middleElement = [];
  let theMiddle;
  let theMiddle1;
  let theMiddle2;

  if (arr.length === 1 || arr.length === 2) {
    return [];
  } else if (arr.length % 2 === 0) {
    theMiddle1 = arr[Math.floor((arr.length - 1) / 2)];
    theMiddle2 = arr[Math.floor(arr.length / 2)];
    middleElement.push(theMiddle1);
    middleElement.push(theMiddle2);
  } else {
    theMiddle = arr[Math.floor(arr.length / 2)];
    middleElement.push(theMiddle);
  }
  return middleElement;
};

assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([1, 2]), []);

assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);

assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);