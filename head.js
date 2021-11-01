const assertEqual = require('./assertEqual');


const head = function(arr) {
  return arr[0];
};

head([8,9,0]);

// assertEqual(head([5,6,7]), 5);
// assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
// assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Labs");
// assertEqual(head([]), "Labs");
// assertEqual(head([]), 9);
// assertEqual(head([5]), 9);
// assertEqual(head([5]), 5);

module.exports = head;