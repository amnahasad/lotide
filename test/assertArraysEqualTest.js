const assertArraysEqual = require('../assertArraysEqual');

assertArraysEqual([1, 2, 3], [1, 2, 3]); //This should PASS
assertArraysEqual([1, 2, 3], [1, 2, 5]); //This should FAIL
assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]); //This should PASS
assertArraysEqual(["1", "2", "3"], ["1", "2", 3]); //This should FAIL