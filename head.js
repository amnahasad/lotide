const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(`😊😊😊 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual("hello", "hello");
assertEqual(1, 1);
assertEqual(5, 2);


const head = function(arr) {
  return arr[0];
};

head([8,9,0]);

assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Labs");
assertEqual(head([]), "Labs");
assertEqual(head([]), 9);
assertEqual(head([5]), 9);
assertEqual(head([5]), 5);