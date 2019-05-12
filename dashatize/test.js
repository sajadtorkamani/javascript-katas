import dashatize from './solution';

describe('dashatize', () => {
  test('inserts a dash around each odd digit (but not at the start or end of string)', () => {
    expect(dashatize(274)).toEqual('2-7-4');
    expect(dashatize(5311)).toEqual('5-3-1-1');
    // -5--3--1--1-
    //   -5-3-1-1-
    //   5-3-1-1
    //
    // 86-3-20
    //
    // -9--7-4-3-02
    // -9-7-4-3-02
    // 9-7-4-3-02
    expect(dashatize(86320)).toEqual('86-3-20');
    expect(dashatize(974302)).toEqual('9-7-4-3-02');
  });

  // test('handles edge cases', () => {
  //   expect(dashatize(NaN)).toEqual('NaN');
  //   expect(dashatize(0)).toEqual('0');
  //   expect(dashatize(-1)).toEqual('1');
  //   expect(dashatize(-28369)).toEqual('28-3-6-9');
  // });
});