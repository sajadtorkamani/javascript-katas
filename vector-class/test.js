import Vector from './solution';

describe('Vector', () => {
  const a = new Vector([1, 2, 3]);
  const b = new Vector([3, 4, 5]);
  const c = new Vector([5, 6, 7, 8]);

  describe('is instantiated correctly', () => {
    const vector = new Vector([2, 4, 6]);

    expect(vector.points).toEqual([2, 4, 6]);
  });

  describe('add', () => {
    test('creates new vector by adding passed in vector with current vector', () => {
      const vector = a.add(b);

      expect(vector).toBeInstanceOf(Vector);
      expect(vector.points).toEqual([4, 6, 8]);
    });

    test('throws error if the two vectors have different lengths', () => {
      expect(() => {
        a.add(c);
      }).toThrow();
    });
  });

  describe('subtract', () => {
    test('creates new vector by subtracting passed in vector from current vector', () => {
      const vector = a.subtract(b);

      expect(vector).toBeInstanceOf(Vector);
      expect(vector.points).toEqual([-2, -2, -2]);
    });

    test('throws error if the two vectors have different lengths', () => {
      expect(() => {
        a.subtract(c);
      }).toThrow();
    });
  });

  describe('dot', () => {
    test('returns the total sum of all the points multiplied by each another', () => {
      expect(a.dot(b)).toEqual(26);
    });

    test('throws error if the two vectors have different lengths', () => {
      expect(() => {
        a.dot(c);
      }).toThrow();
    });
  });

  describe('norm', () => {
    test('returns the correct result', () => {
      expect(a.norm()).toEqual(Math.sqrt(14));
      expect(b.norm()).toEqual(Math.sqrt(50));
    });
  });

  describe('equals', () => {
    test('determines if two vectors have the same length and points', () => {
      expect(a.add(b).equals(new Vector([4, 6, 8]))).toEqual(true);
      expect(a.add(b).equals(new Vector([4, 6, 30]))).toEqual(false);
      expect(a.add(b).equals(new Vector([4, 6, 8, 30]))).toEqual(false);
    });
  });

  describe('toString', () => {
    test('returns string list of all the vector points in brackets', () => {
      expect(a.toString()).toEqual('(1,2,3)');
    });
  });

});