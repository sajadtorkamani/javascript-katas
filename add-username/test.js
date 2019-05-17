import addUsername from './solution';

describe('addUsername', () => {
  test('returns correct result', () => {
    Date.prototype.getFullYear = jest.fn(() => 2020);

    const input = [
      { firstName: 'Emily', lastName: 'N.', country: 'Ireland', continent: 'Europe', age: 30, language: 'Ruby' },
      { firstName: 'Nor', lastName: 'E.', country: 'Malaysia', continent: 'Asia', age: 20, language: 'Clojure' }
    ];

    const expectedOutput = [
      {
        firstName: 'Emily',
        lastName: 'N.',
        country: 'Ireland',
        continent: 'Europe',
        age: 30,
        language: 'Ruby',
        username: 'emilyn1990'
      },
      {
        firstName: 'Nor',
        lastName: 'E.',
        country: 'Malaysia',
        continent: 'Asia',
        age: 20,
        language: 'Clojure',
        username: 'nore2000'
      }
    ];

    expect(addUsername(input)).toEqual(expectedOutput);
    Date.prototype.getFullYear.mockRestore();
  });
});