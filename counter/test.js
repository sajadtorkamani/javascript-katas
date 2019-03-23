import Counter from './solution';

describe('Counter class', () => {
  test('should have an initial value of 0', () => {
    const c = new Counter();
    expect(c == 0).toBe(true);
  });

  describe('#incr', () => {
    test('increments this.value by 1', () => {
      const c = new Counter();
      c.incr();
      expect(c == 1).toBe(true);
    });
  });

  test('supports arithmetic operations', () => {
    const c = new Counter();
    c.incr();
    expect(c + 1).toEqual(2);
    expect(c > 0).toBe(true);
  });
});