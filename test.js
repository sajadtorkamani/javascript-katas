import assert from 'assert';
import { gematria } from './solution';

describe('gematria', () => {
  test('returns correct result', () => {
    assert.equal(gematria("love"), 775);
    assert.equal(gematria("Devil"), 738);
    assert.equal(gematria("Coding is fun"), 458);
  });
});

