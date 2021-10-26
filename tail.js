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

const tail = function(arr) {

  return arr.slice(1);
};

const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result.length, 2); // ensure we get back two elements
assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
assertEqual(result[1], "Labs"); // ensure second element is "Labs"

const result2 = tail(["Hello"]);
assertEqual(result2.length, 0); // ensure we get back zero elements

const temp = [];
const result3 = tail(temp);
console.log(result3.length);
assertEqual(result3.length, temp.length);

// Test Case: Check the original array
const words = ["Yo Yo", "Lighthouse", "Labs"];
const newTail = tail(words); // no need to capture the return value since we are not checking it
console.log(newTail);
console.log(words);
assertEqual(words.length, 3); // original array should still have 3 elements!