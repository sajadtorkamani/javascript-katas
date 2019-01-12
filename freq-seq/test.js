import freqSeq from './solution';

describe('freqSeq', () => {
  test('returns correct result', () => {
    expect(freqSeq('hello world', '-')).toEqual('1-1-3-3-2-1-1-2-1-3-1');
    expect(freqSeq('19999999', ':')).toEqual('1:7:7:7:7:7:7:7');
    expect(freqSeq('^^^**$', 'x')).toEqual('3x3x3x2x2x1');
  });
});