const eqObjects = function(object1, object2) {

  let arrayKey1 = Object.keys(object1);
  let arrayKey2 = Object.keys(object2);

  if (arrayKey1.length !== arrayKey2.length) {
    return false;
  }
  for (let value of arrayKey1) {
    if (Array.isArray(object1[value]) && Array.isArray(object2[value])) {
      return eqArrays(object1[value], object2[value]);
    } else {
      if (object1[value] !== object2[value]) {
        return false;
      }
    }
  }
  return true;
};


const assertObjectsEqual = function(actual, expected) {
  
  const inspect = require('util').inspect;

  if (eqObjects(actual, expected) === true) {
    console.log(`😊😊😊 Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

assertObjectsEqual({ a: "1", b: "2" }, { a: "1", b: "2" });
assertObjectsEqual({ a: '1', b: 2 }, { b: 2, a: '1' });
