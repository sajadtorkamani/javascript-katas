import assert from 'assert';
import { drawSpider } from './solution';

describe('drawSpider', () => {
  test('returns correct result', () => {
    assert.equal(drawSpider(1, 1, "W", "o"), "^(oWo)^")    ;
    assert.equal(drawSpider(2, 2, "w", "O"), "/\\((OOwOO))/\\");
    assert.equal(drawSpider(3, 3, "w", "0"), "/╲(((0000w0000)))╱\\");
  });
});

