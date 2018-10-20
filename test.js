import assert from 'assert';
import { one } from './solution';

describe('one', () => {
  test('returns correct result', () => {
    assert.equal(one([1,2,3,4,5], function(item){ return item<2}), true)
    assert.equal(one([1,2,3,4,5], function(item){ return item%2 }), false, "more than 1 item are odd")
    assert.equal(one([1,2,3,4,5], function(item){ return item>5 }), false, "none item is greater than 5")
  });
});

