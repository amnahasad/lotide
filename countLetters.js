const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(`😊😊😊 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};


const countLetters = function(sentence) {

  let count = {};

  for (let letter of sentence.split(' ').join('')) {
    if (count[letter]) {
      count[letter]++;
    } else {
      count[letter] = 1;
    }
  }
  console.log(count);
  return count;
};

let string = countLetters("lighthouse in the house");
assertEqual(string.l, 1);
assertEqual(string.h, 4);