const assert = require('chai').assert;
const middle   = require('../middle');

describe("#middle", () => {
  it("returns 2 for [1, 2, 3]", () => {
    assert.deepEqual(middle([2]), []);
  });

  it("returns '5' for ['5']", () => {
    assert.deepEqual(middle([4, 5]), []); 
  });

  it("returns '6' for [5,6,7]", () => {
    assert.deepEqual(middle([5,6,7]), [6]); 
  });

  it("returns 'Lighthouse' for ['Hello', 'Lighthouse', 'Labs']", () => {
    assert.deepEqual(middle(['Hello', 'Lighthouse', 'Lighthouse', 'Labs']), ["Lighthouse", "Lighthouse"]); 
  });

  it("returns '2, 3' for [1, 2, 3, 4]", () => {
    assert.deepEqual(middle([1, 2, 3, 4]), [2, 3]); 
  });

  it("returns '3, 4' for [1, 2, 3, 4, 5, 6]", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]); 
  });
});

