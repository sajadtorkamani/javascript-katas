import askForMissingDetails from './solution';

describe('askForMissingDetails', () => {
  test('returns correct result', () => {
    const list1 = [
      { firstName: null, lastName: 'I.', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java' },
      { firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 35, language: null },
      { firstName: 'Madison', lastName: 'U.', country: 'United States', continent: 'Americas', age: 32, language: 'Ruby'
      }
    ];
    const answer1 = [
      {
        firstName: null, lastName: 'I.', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java',
        question: 'Hi, could you please provide your firstName.'
      },
      {
        firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 35, language: null,
        question: 'Hi, could you please provide your language.'
      }
    ];

    expect(askForMissingDetails(list1)).toEqual(answer1);

    const list2 = [
      { firstName: 'Sofia', lastName: 'I.', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java' },
      { firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 35, language: 'Python' },
      { firstName: 'Madison', lastName: 'U.', country: 'United States', continent: 'Americas', age: 32, language: 'Ruby' }
    ];
    const answer2 = [];

    expect(askForMissingDetails(list2)).toEqual(answer2);
  });
});