import { List } from './solution';

describe('List', () => {
  describe('#countSpecDigits', () => {
    let list = new List();

    test('is a method', () => {
      expect(typeof list.countSpecDigits).toEqual('function');
    });

    test('returns correct result', () => {
      expect(
        list.countSpecDigits(
          [1, 1, 2, 3, 1, 2, 3, 4],
          [1, 3]
        )
      ).toEqual(
        [[1, 3], [3, 2]]
      );
    });
  });
});

/*
integersList =  [1, 1, 2, 3, 1, 2, 3, 4];
digitsList = [1, 3];
Test.assertSimilar(l.countSpecDigits(integersList, digitsList),[[1, 3], [3, 2]]);
*/