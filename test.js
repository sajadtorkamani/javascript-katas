import assert from 'assert';
import { smallEnough } from './solution';

describe('smallEnough', () => {
  test('returns correct result', () => {
    assert.equal(smallEnough([66, 101], 200), true);
    assert.equal(smallEnough([78, 117, 110, 99, 104, 117, 107, 115], 100), false);
    assert.equal(smallEnough([101, 45, 75, 105, 99, 107], 107), true);
    assert.equal(smallEnough([80, 117, 115, 104, 45, 85, 112, 115], 120), true);
  });
});

