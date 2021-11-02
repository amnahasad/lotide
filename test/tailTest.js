const assert = require('chai').assert;
const tail   = require('../tail');

describe("#middle", () => {
  it("returns 2 for [1, 2, 3]", () => {
    assert.deepEqual(tail([2]), []);
  });

  it("returns '6, 7' for [5,6,7]", () => {
    assert.deepEqual(tail([5,6,7]), [6, 7]); 
  });

  it("returns ['Lighthouse', 'Labs'] for ['Hello', 'Lighthouse', 'Labs']", () => {
    assert.deepEqual(tail(['Hello', 'Lighthouse', 'Labs']), ['Lighthouse', 'Labs']); 
  });

  it("returns '2, 3, 4' for [1, 2, 3, 4]", () => {
    assert.deepEqual(tail([1, 2, 3, 4]), [2, 3, 4]); 
  });

  it("returns '2, 3, 4, 5, 6' for [1, 2, 3, 4, 5, 6]", () => {
    assert.deepEqual(tail([1, 2, 3, 4, 5, 6]), [2, 3, 4, 5, 6]); 
  });
});
